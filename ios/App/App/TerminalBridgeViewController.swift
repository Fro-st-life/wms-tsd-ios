import Capacitor

public class TerminalBridgeViewController: CAPBridgeViewController {
    override public func capacitorDidLoad() {
        bridge?.registerPluginInstance(ChatSecureStoragePlugin())
    }
}
