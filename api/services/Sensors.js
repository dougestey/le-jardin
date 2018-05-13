let rpio = require('rpio');
//rpio.init();

module.exports = {

  IRAlpha: {

    read(pin) {
      console.log(`Attempting to read pin ${pin}...`);

      //rpio.pud(this.pin, rpio.PULL_DOWN);
      rpio.open(pin, rpio.INPUT);

      let value = rpio.read(pin);

      console.log(`IR Alpha (Pin ${pin}) is currently set ${value ? 'high' : 'low'}`);

      return value;
    }

  }

};
