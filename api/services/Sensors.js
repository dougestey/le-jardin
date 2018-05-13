let rpio = require('rpio');
//rpio.init();

module.exports = {

  IRAlpha: {

    read(pin) {
      console.log(`Attempting to read pin ${pin}...`);

      rpio.open(pin, rpio.INPUT);

      let value = rpio.read(pin);

      console.log(`IR Alpha (Pin ${pin}) is currently set ${value ? 'high' : 'low'}`);

      return value;
    },

    start(pin) {
      let cb = () => {
        console.log(`Someone is arriving!`);
      };

      rpio.open(pin, rpio.INPUT);
      rpio.poll(pin, cb);
    },

    stop(pin) {
      rpio.poll(pin, null);
    }

  }

};
