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

  allRotate(req, res) {
    Effects.allRotate();

    return res.status(200).json({ message: 'Lights are on rotation.' });
  },

  allGreet(req, res) {
    Effects.allGreet();

    return res.status(200).json({ message: 'Lights are wavy.' });
  },

};
