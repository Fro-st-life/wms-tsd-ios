import Capacitor
import UIKit
import WebKit

public class TerminalBridgeViewController: CAPBridgeViewController {
    override public func capacitorDidLoad() {
        bridge?.registerPluginInstance(ChatSecureStoragePlugin())
        guard let webView = webView else { return }

        // Keep fixed web headers, dialogs and footers inside the same safe viewport.
        let container = UIView()
        container.backgroundColor = .systemBackground
        view = container
        container.addSubview(webView)
        webView.translatesAutoresizingMaskIntoConstraints = false
        let safeArea = container.safeAreaLayoutGuide
        NSLayoutConstraint.activate([
            webView.topAnchor.constraint(equalTo: safeArea.topAnchor),
            webView.bottomAnchor.constraint(equalTo: safeArea.bottomAnchor),
            webView.leadingAnchor.constraint(equalTo: safeArea.leadingAnchor),
            webView.trailingAnchor.constraint(equalTo: safeArea.trailingAnchor)
        ])

        let swipe = UIScreenEdgePanGestureRecognizer(target: self, action: #selector(handleBackSwipe(_:)))
        swipe.edges = .left
        container.addGestureRecognizer(swipe)
        webView.scrollView.panGestureRecognizer.require(toFail: swipe)
    }

    @objc private func handleBackSwipe(_ swipe: UIScreenEdgePanGestureRecognizer) {
        guard swipe.state == .ended else { return }
        let movement = swipe.translation(in: view)
        guard movement.x >= 60, movement.x > abs(movement.y) else { return }
        bridge?.plugin(withName: "App")?.notifyListeners("backButton", data: [:])
    }
}
