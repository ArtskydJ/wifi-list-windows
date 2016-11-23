# wifi-list-windows

> Like [mafintosh/wifi-list](https://github.com/mafintosh/wifi-list), but for Windows

# install

Install with [npm](https://nodejs.org/en/download)

```
npm install wifi-list-windows
```

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
[ { name: 'Dykstra Home',
    networkType: 'Infrastructure',
    authentication: 'WPA2-Personal',
    encryption: 'CCMP',
    bssid: 'c2:9f:db:f7:e8:eb',
    channel: '99%',
    signal: '802.11n',
    radioType: '9',
    basicRates: '1 2 5.5 11',
    otherRates: '6 9 12 18 24 36 48 54' },
  { name: 'Home Wireless',
    networkType: 'Infrastructure',
    authentication: 'WPA2-Personal',
    encryption: 'CCMP',
    bssid: '20:76:00:84:5b:25',
    channel: '28%',
    signal: '802.11n',
    radioType: '1',
    basicRates: '1 2 5.5 11',
    otherRates: '6 9 12 18 24 36 48 54' } ]
```

# License

MIT
