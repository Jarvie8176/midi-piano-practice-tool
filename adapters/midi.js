const midi = require('midi');

const Midi = function() {
    _midi = midi();
};

Midi.prototype.open = function() {

}

Midi.prototype.close = function() {

}

Midi.prototype.on = function(event, cb) {
    var self = this;

    self._midi.on(event, cb);
};

module.exports = Midi;