var events = require('events')
var util = require('util')

module.exports = Typing
function Typing(text, opts) {
  events.EventEmitter.call(this)
  this.t = ''
  // I don't know... this seems... whatever
  if (!text || (typeof text != 'string')) {
    this.t = ''
  } else {
    this.t = text
  }
  
  this.tlen = 0
  this.timing = (opts && opts.timing) ? opts.timing : 50
}
util.inherits(Typing, events.EventEmitter)

function isElement(obj) {
  return (obj && typeof obj == 'object' && 'nodeType' in obj && obj.nodeType === 1)
}

Typing.prototype.type = function(text, elem) {
  var e = elem
  if (text) {
    if (isElement(text)) {
      e = text
    } else {
      this.t = text
      this.tlen = 0
    }
  }
  var txt = this.t.substr(0, this.tlen++)
  
  this.emit('data', txt)
  if (isElement(e)) {
    e.innerHTML = txt
  }
  if (this.tlen < this.t.length+1) {
    setTimeout(this.type.bind(this), this.timing, e)
  } else {
    this.emit('end')
    this.tlen = 0
    this.t = ''
  }
}