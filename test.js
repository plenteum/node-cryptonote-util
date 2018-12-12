'use strict'

const cnUtil = require('./')
const Buffer = require('safe-buffer').Buffer
const assert = require('assert')

var validAddressPrefix = 18181
var addressPrefix = cnUtil.address_decode(new Buffer('PLeah9bvqxEDUWbRFqgNcYDeoL772WH9mcCQu9p29MC23NeCUkbVdUEfwDAtF8SgV81kf2hwCdpxqAJmC9k3nJsA7W4UThrufj'))
console.log("Address Prefix: ", addressPrefix)

assert.deepEqual(validAddressPrefix, addressPrefix)