function FindProxyForURL(url, host) {
    host = host.toLowerCase();
    
    if (
        dnsDomainIs(host, "example.com") || host === "example.com"
    ) {
        // Используем PROXY вместо HTTPS для полной совместимости с Windows WinINet
        return "HTTPS 193.24.208.228:2871";
    }
    
    return "DIRECT";
}
