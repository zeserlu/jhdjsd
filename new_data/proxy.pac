function FindProxyForURL(url, host) {
    host = host.toLowerCase();
    
    if (
        dnsDomainIs(host, "example.com")  || host === "example.com" ||
        dnsDomainIs(host, "pastebin.com")  || host === "pastebin.com" ||
        dnsDomainIs(host, "dd.def.com") || host === "accounts.google.com"
    ) {
        return "PROXY 193.24.208.228:2871; DIRECT";
    }
    
    return "DIRECT";
}
