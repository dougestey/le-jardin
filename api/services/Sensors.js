let rpio = require('rpio');
rpio.init();

let interval = 0;

module.exports = {

  IRAlpha: {

    read(pin) {
      rpio.open(pin, rpio.INPUT);
      let value = rpio.read(pin);

      console.log(`IR Alpha (Pin ${pin}) is currently set ${value ? 'high' : 'low'}`);

      return value;
    },

    start(pin) {
      let cb = () => {
          console.log('Someone is arriving!');
          Effects.allGreet();
      };

      rpio.open(pin, rpio.INPUT);
      rpio.poll(pin, cb, rpio.POLL_HIGH);
    },

    stop(pin) {
      rpio.poll(pin, null);
    }

  }

};
