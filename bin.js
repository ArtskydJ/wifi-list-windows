#!/usr/bin/env node
var list = require('./')

list(function (err, networks) {
	if (err) throw err
	console.log(networks)
})
