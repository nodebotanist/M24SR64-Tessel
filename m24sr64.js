const tessel = require('tessel')
const util = require('util')
const EventEmitter = require('events').EventEmitter

/* 
  Regular i2c pin layout
  digital 1 (pin 6) is RFDisable pin
.
  research:
  https://download.mikroe.com/documents/add-on-boards/click/nfc-tag/nfc-tag-click-manual-v100.pdf
  https://www.st.com/resource/en/datasheet/m24sr64-y.pdf
  https://github.com/stm32duino/M24SR64-Y/
*/

const REGISTERS = {

}

function M24SR64(opts) {

}

util.inherits(M24SR64, EventEmitter)

module.exports = M24SR64