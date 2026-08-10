function FindProxyForURL(url, host) {
    host = host.toLowerCase();
    
    if (
        dnsDomainIs(host, "example.com")  || host === "example.com" ||
        dnsDomainIs(host, "gmail.com") || host === "gmail.com"
    ) {
        return "PROXY 193.24.208.228:2871";
    }
    
    return "DIRECT";
}
