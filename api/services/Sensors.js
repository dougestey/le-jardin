let rpio = require('rpio');

module.exports = {

  IRAlpha: {

    pin: 2,

    read() {
      rpio.open(this.pin, rpio.INPUT);

      let value = rpio.read(this.pin);

      console.log('IR Alpha (Pin 2) is currently set ' + (value ? 'high' : 'low'));

      return value;
    }

  }

};
