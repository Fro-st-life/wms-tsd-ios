import Foundation
import Capacitor
import CryptoKit
import Security

/// Keys stay in Keychain/native RAM; only bounded record chunks cross the bridge.
@objc(ChatSecureStoragePlugin)
public class ChatSecureStoragePlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "ChatSecureStoragePlugin"
    public let jsName = "ChatSecureStorage"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "availability", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "encrypt", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "decrypt", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "clearAccount", returnType: CAPPluginReturnPromise)
    ]
    private let service = "com.wms.chat.secure.v1"
    private let worker = DispatchQueue(label: "wms-chat-crypto", qos: .utility)
    private let pendingLock = NSLock()
    private var pending = 0
    private let chunkBytes = 65536
    private enum StorageFailure: Error { case invalid, keyUnavailable, integrity }

    private func enqueue(_ call: CAPPluginCall, critical: Bool = false, _ work: @escaping () throws -> Void) {
        pendingLock.lock()
        // Four bounded slots remain available to logout key deletion under normal load.
        guard pending < (critical ? 16 : 12) else {
            pendingLock.unlock()
            call.reject("Защищённое хранилище занято. Повторите сохранение.", "BUSY")
            return
        }
        pending += 1
        pendingLock.unlock()
        worker.async {
            defer { self.pendingLock.lock(); self.pending -= 1; self.pendingLock.unlock() }
            do { try work() }
            catch StorageFailure.invalid { call.reject("Некорректные параметры локального хранилища.", "INVALID_ARGUMENT") }
            catch StorageFailure.integrity { call.reject("Не удалось проверить целостность локального чата.", "INTEGRITY_FAILED") }
            catch { call.reject("Защищённое хранилище устройства недоступно.", "KEY_UNAVAILABLE") }
        }
    }
    private func bounded(_ call: CAPPluginCall, _ name: String, _ max: Int) throws -> String {
        guard let value = call.getString(name), value.utf8.count <= max else { throw StorageFailure.invalid }
        return value
    }
    private func bytes(_ call: CAPPluginCall, _ name: String, _ max: Int) throws -> Data {
        let value = try bounded(call, name, ((max + 2) / 3) * 4)
        guard let decoded = Data(base64Encoded: value), decoded.count <= max else { throw StorageFailure.invalid }
        return decoded
    }
    private func preflight(_ call: CAPPluginCall, decrypt: Bool) -> Bool {
        do {
            _ = try bounded(call, "scope", 2048)
            _ = try bounded(call, "aadBase64", ((4096 + 2) / 3) * 4)
            if decrypt {
                _ = try bounded(call, "keyId", 64)
                _ = try bounded(call, "ivBase64", 16)
                _ = try bounded(call, "ciphertextBase64", ((chunkBytes + 16 + 2) / 3) * 4)
            } else { _ = try bounded(call, "plaintextBase64", ((chunkBytes + 2) / 3) * 4) }
            return true
        } catch {
            call.reject("Некорректные параметры локального хранилища.", "INVALID_ARGUMENT")
            return false
        }
    }
    private func account(_ value: String) throws -> String {
        guard value.range(of: "^[1-9][0-9]{0,19}$", options: .regularExpression) != nil else { throw StorageFailure.invalid }
        return value
    }
    private func accountOf(_ scope: String) throws -> String {
        guard scope.utf8.count <= 2048, !scope.unicodeScalars.contains(where: { $0.value < 32 || $0.value == 127 }),
              let separator = scope.firstIndex(of: ":"), scope.index(after: separator) < scope.endIndex else { throw StorageFailure.invalid }
        return try account(String(scope[..<separator]))
    }
    private func hash(_ value: String) -> String {
        SHA256.hash(data: Data(value.utf8)).map { String(format: "%02x", $0) }.joined()
    }
    private func keyID(_ scope: String) throws -> String { _ = try accountOf(scope); return hash(scope) }
    private func alias(_ scope: String) throws -> String { return try hash(accountOf(scope)) + "." + keyID(scope) }
    private func query(_ name: String) -> [String: Any] {
        [kSecClass as String: kSecClassGenericPassword, kSecAttrService as String: service,
         kSecAttrAccount as String: name, kSecAttrSynchronizable as String: false]
    }
    private func key(_ scope: String, create: Bool) throws -> SymmetricKey {
        let name = try alias(scope)
        var lookup = query(name)
        lookup[kSecReturnData as String] = true
        lookup[kSecMatchLimit as String] = kSecMatchLimitOne
        var result: CFTypeRef?
        let status = SecItemCopyMatching(lookup as CFDictionary, &result)
        if status == errSecSuccess {
            guard var data = result as? Data, data.count == 32 else { throw StorageFailure.keyUnavailable }
            defer { data.resetBytes(in: 0..<data.count) }
            return SymmetricKey(data: data)
        }
        guard status == errSecItemNotFound && create else { throw StorageFailure.keyUnavailable }
        let generated = SymmetricKey(size: .bits256)
        var data = generated.withUnsafeBytes { Data($0) }
        defer { data.resetBytes(in: 0..<data.count) }
        var insert = query(name)
        insert[kSecAttrAccessible as String] = kSecAttrAccessibleWhenUnlockedThisDeviceOnly
        insert[kSecValueData as String] = data
        let inserted = SecItemAdd(insert as CFDictionary, nil)
        if inserted == errSecDuplicateItem { return try key(scope, create: false) }
        guard inserted == errSecSuccess else { throw StorageFailure.keyUnavailable }
        return generated
    }
    private func aad(_ scope: String, _ supplied: Data) throws -> Data {
        _ = try accountOf(scope)
        guard supplied.count <= 4096 else { throw StorageFailure.invalid }
        let namespace = Data(scope.utf8)
        var data = Data("wms-chat-at-rest:v1".utf8)
        var length = UInt32(namespace.count).bigEndian
        withUnsafeBytes(of: &length) { data.append(contentsOf: $0) }
        data.append(namespace)
        length = UInt32(supplied.count).bigEndian
        withUnsafeBytes(of: &length) { data.append(contentsOf: $0) }
        data.append(supplied)
        return data
    }
    @objc func availability(_ call: CAPPluginCall) {
        call.resolve(["available": true, "platform": "ios", "storage": "ios-keychain", "chunkBytes": chunkBytes])
    }
    @objc func encrypt(_ call: CAPPluginCall) {
        guard preflight(call, decrypt: false) else { return }
        enqueue(call) {
            let scope = try self.bounded(call, "scope", 2048)
            var plain = try self.bytes(call, "plaintextBase64", self.chunkBytes)
            defer { plain.resetBytes(in: 0..<plain.count) }
            let authenticated = try self.aad(scope, self.bytes(call, "aadBase64", 4096))
            let sealed = try AES.GCM.seal(plain, using: self.key(scope, create: true), authenticating: authenticated)
            let iv = sealed.nonce.withUnsafeBytes { Data($0) }
            guard iv.count == 12 else { throw StorageFailure.keyUnavailable }
            var ciphertext = sealed.ciphertext
            ciphertext.append(sealed.tag)
            call.resolve(["keyId": try self.keyID(scope), "ivBase64": iv.base64EncodedString(), "ciphertextBase64": ciphertext.base64EncodedString()])
        }
    }
    @objc func decrypt(_ call: CAPPluginCall) {
        guard preflight(call, decrypt: true) else { return }
        enqueue(call) {
            let scope = try self.bounded(call, "scope", 2048)
            guard try self.keyID(scope) == self.bounded(call, "keyId", 64) else { throw StorageFailure.invalid }
            let iv = try self.bytes(call, "ivBase64", 12)
            let ciphertext = try self.bytes(call, "ciphertextBase64", self.chunkBytes + 16)
            guard iv.count == 12 && ciphertext.count >= 16 else { throw StorageFailure.invalid }
            let authenticated = try self.aad(scope, self.bytes(call, "aadBase64", 4096))
            let key = try self.key(scope, create: false) // Never regenerate a missing decrypt key.
            let sealed = try AES.GCM.SealedBox(nonce: AES.GCM.Nonce(data: iv), ciphertext: Data(ciphertext.dropLast(16)), tag: Data(ciphertext.suffix(16)))
            var plain: Data
            do { plain = try AES.GCM.open(sealed, using: key, authenticating: authenticated) }
            catch { throw StorageFailure.integrity }
            defer { plain.resetBytes(in: 0..<plain.count) }
            call.resolve(["plaintextBase64": plain.base64EncodedString()])
        }
    }
    @objc func clearAccount(_ call: CAPPluginCall) {
        enqueue(call, critical: true) {
            let account = try self.account(self.bounded(call, "accountId", 20))
            let prefix = self.hash(account) + "."
            let lookup: [String: Any] = [kSecClass as String: kSecClassGenericPassword, kSecAttrService as String: self.service,
                kSecAttrSynchronizable as String: false, kSecReturnAttributes as String: true, kSecMatchLimit as String: kSecMatchLimitAll]
            var result: CFTypeRef?
            let status = SecItemCopyMatching(lookup as CFDictionary, &result)
            if status == errSecItemNotFound { call.resolve(); return }
            guard status == errSecSuccess, let attributes = result as? [[String: Any]] else { throw StorageFailure.keyUnavailable }
            for item in attributes {
                guard let name = item[kSecAttrAccount as String] as? String, name.hasPrefix(prefix) else { continue }
                let deleted = SecItemDelete(self.query(name) as CFDictionary)
                guard deleted == errSecSuccess || deleted == errSecItemNotFound else { throw StorageFailure.keyUnavailable }
            }
            call.resolve()
        }
    }
}
