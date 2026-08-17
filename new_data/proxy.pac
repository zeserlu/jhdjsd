function FindProxyForURL(url, host) {
    host = host.toLowerCase();
    
    if (
        dnsDomainIs(host, "example.com")  || host === "example.com" ||
        dnsDomainIs(host, "pastebin.com")  || host === "pastebin.com" ||
        dnsDomainIs(host, "checkout.stripe.com")  || host === "checkout.stripe.com" ||
        dnsDomainIs(host, "grok.com")  || host === "grok.com" 
    ) {
        return "PROXY 193.24.208.228:2871; DIRECT";
    }
    
    return "DIRECT";
}
