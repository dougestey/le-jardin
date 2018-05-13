module.exports = {

  async find(req, res) {
    let lights = await Huejay.lights.getAll();

    return res.status(200).json(lights);
  },

  async scan(req, res) {
    let scan = await Huejay.lights.scan();

    return res.status(200).json({ message: 'Started scanning... '});
  },

  allOn(req, res) {
    Effects.allOn();

    return res.status(200).json({ message: 'Lights are on.' });
  },

  allOff(req, res) {
    Effects.allOff();

    return res.status(200).json({ message: 'Lights are off.' });
  },

  allFire(req, res) {
    Effects.allFire();

    return res.status(200).json({ message: 'Lights are on fire.' });
  },

  allIce(req, res) {
    Effects.allIce();

    return res.status(200).json({ message: 'Lights are on ice.' });
  },

  allGreet(req, res) {
    Effects.allGreet();

    return res.status(200).json({ message: 'Lights are wavy.' });
  },

  allStrobe(req, res) {
    Effects.allStrobe();

    return res.status(200).json({ message: 'Lights are raving.' });
  }

};
