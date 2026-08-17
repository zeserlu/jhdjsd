function FindProxyForURL(url, host) {
    host = host.toLowerCase();
    
    var lowerUrl = url.toLowerCase();
    if (lowerUrl.substring(lowerUrl.length - 4) === ".mp4" || lowerUrl.indexOf(".mp4?") !== -1) {
        return "DIRECT";
    }

    return "PROXY 193.24.208.228:2871; DIRECT";
}
