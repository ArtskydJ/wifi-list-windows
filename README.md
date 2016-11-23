# wifi-list-windows

[![Build Status](https://travis-ci.org/ArtskydJ/wifi-list-windows.svg?branch=master)](https://travis-ci.org/ArtskydJ/wifi-list-windows)

> Like [mafintosh/wifi-list](https://github.com/mafintosh/wifi-list), but for Windows

# Example

```js
var wifiList = require('wifi-list-windows')

wifiList(function (err, networks) {
	if (err) throw err
	console.log(networks)
})
```

Running the above will list nearby wifi networks.

```js
[ { ssid: 'Dykstra Home',
    networkType: 'Infrastructure',
    authentication: 'WPA2-Personal',
    encryption: 'CCMP',
    bssid: '12:34:56:78:90:ab',
    channel: 9,
    signal: 0.99,
    radioType: '802.11n',
    basicRatesMbps: '1 2 5.5 11',
    otherRatesMbps: '6 9 12 18 24 36 48 54' },
  { ssid: 'Home Wireless',
    networkType: 'Infrastructure',
    authentication: 'WPA2-Personal',
    encryption: 'CCMP',
    bssid: 'cd:ef:12:34:56:78',
    channel: 1,
    signal: 0.28,
    radioType: '802.11n',
    basicRatesMbps: '1 2 5.5 11',
    otherRatesMbps: '6 9 12 18 24 36 48 54' } ]
```

# API

```js
var wifiList = require('wifi-list-windows')
```

### `wifiList(cb)`

Looks up the list of networks. Calls `cb(err, networks)` when it's ready.

- `err` (null|Error) If an error occurs, `networks` will be undefined, and `err` will be an Error object.
- `networks` (array of objects|undefined) If no error occurs, `networks` will be an array of objects with the following properties. Note that the array might be empty, meaning it detected no networks.
    - [`ssid`](https://en.wikipedia.org/wiki/Service_set_(802.11_network)#Service_set_identifier_.28SSID.29) (string) The SSID/network name.
    - `networkType` (string) E.g. "Infrastructure", "Adhoc"
    - [`authentication`](https://en.wikipedia.org/wiki/Wi-Fi#Range) (string) E.g. "Open", "WPA2-Personal"
    - [`encryption`](https://en.wikipedia.org/wiki/Wi-Fi#Data_security_risks) (string)
    - [`bssid`](https://en.wikipedia.org/wiki/Service_set_(802.11_network)#Basic_service_set_identifier_.28BSSID.29) (string) Hex string, e.g. "15:9e:f2:29:33:e5"
    - [`channel`](https://en.wikipedia.org/wiki/List_of_WLAN_channels#Interference_concerns) (number) Integer between 1 and 14
    - `signal` (number) Floating point number between 0 and 1 that indicates the strength of the signal. Closer to 0 is a weaker signal. Closer to 1 is a stronger signal.
    - [`radioType`](https://en.wikipedia.org/wiki/Wi-Fi#Range) (string) E.g. "802.11n"
    - `basicRatesMbps` (string) I don't know what this means. If you do, please make a PR that fixes this line!
    - `otherRatesMbps` (string) I don't know what this means. If you do, please make a PR that fixes this line!

# CLI

```
> npm install wifi-list-windows -g
> wifi-list
[ { ssid: 'Dykstra Home',
    networkType: 'Infrastructure',
    authentication: 'WPA2-Personal',
    encryption: 'CCMP',
    bssid: '15:9e:f2:29:33:e5',
    channel: 9,
    signal: 0.99,
    radioType: '802.11n',
    basicRatesMbps: '1 2 5.5 11',
    otherRatesMbps: '6 9 12 18 24 36 48 54' } ]
```

# install

Install with [npm](https://nodejs.org/en/download)

```sh
npm install wifi-list-windows # install API
npm install wifi-list-windows -g # install CLI
```

# License

MIT
