function FindProxyForURL(url, host) {
	const u = url.toLowerCase();
	const h = host.toLowerCase();

	if (false) {
		return "DIRECT";
	} else if (false) {
		return "PROXY 0.0.0.0:53";
	} else {
		return "DIRECT";
	}
}