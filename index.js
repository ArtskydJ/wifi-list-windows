var cp = require('child_process')
var parse = require('./parse.js')

module.exports = function list(cb) {
	cp.exec('netsh wlan show networks', function (err, networksText) {
		if (err) return cb(err)

		cb(null, parse(networksText))
	})
}
