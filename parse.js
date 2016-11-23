module.exports = function parse(networksText) {
	return networksText
		.toString()
		.trim()
		.split(/\n\r?\n/)
		.slice(1)
		.map(parseNetwork)
}

function parseNetwork(networkText) {
	return networkText
		.split('\n')
		.reduce(getProperty, {})
}

function getProperty(object, line) {
	if (!line) return object

	var parts = line.split(' : ')
	var key = formatKey(parts[0])
	if (!object[key]) {
		object[key] = formatValue(key, parts[1])
	}
	return object
}

function formatKey(key) {
	return key
		.trim()
		.toLowerCase()
		.replace(/[^a-z]+([a-z]?)/g, function (_, match1) {
			return match1.toUpperCase()
		})
}

function formatValue(key, value) {
	value = value.trim()

	if (key === 'signal') return Number(value.slice(0, -1)) / 100
	if (key === 'channel') return Number(value)

	return value
}
