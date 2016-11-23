module.exports = function parse(networksText) {
	return networksText
		.toString()
		.split(/^SSID \d+ : /m)
		.slice(1)
		.map(parseNetwork)
}

function parseNetwork(networkText) {
	var lines = ('name : ' + networkText).trim().split('\n')

	var properties = lines.reduce(function (memo, line) {
		var parts = line.split(' : ')
		var key = parts[0].trim()
		var value = parts[1].trim()
		if (!memo[key]) {
			memo[key] = value
		}
		return memo
	}, {})

	return {
		name: properties['name'],
		networkType: properties['Network type'],
		authentication: properties['Authentication'],
		encryption: properties['Encryption'],
		bssid: properties['BSSID 1'],
		channel: properties['Signal'],
		signal: properties['Radio type'],
		radioType: properties['Channel'],
		basicRates: properties['Basic rates (Mbps)'],
		otherRates: properties['Other rates (Mbps)'],
	}
}
