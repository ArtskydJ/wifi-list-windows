var fs = require('fs')
var test = require('tape')
var parse = require('../parse.js')

test('Parses no networks', function (t) {
	var noNetworksText = fs.readFileSync(__dirname + '/fixtures/output_0_networks.txt') // buffer
	var noNetworksResult = parse(noNetworksText)

	t.deepEqual(noNetworksResult, [], 'Array is empty')
	t.end()
})

test('Parses two networks', function (t) {
	var twoNetworksText = fs.readFileSync(__dirname + '/fixtures/output_2_networks.txt', { encoding: 'utf-8' })
	var twoNetworksResult = parse(twoNetworksText)

	t.deepEqual(twoNetworksResult, require('./fixtures/expect_2_networks.json'))
	t.end()
})
