var EventEmitter = require('events');
var  events = new EventEmitter();

module.exports = {
  on : function(e, fn) {
    events.on(e, fn);
  },
  emit : function(e, data) {
    events.emit(e, data);
  }
}