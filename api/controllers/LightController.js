module.exports = {

  async find(req, res) {
    let lights = await Huejay.lights.getAll();

    return res.status(200).json(lights);
  },

  async scan(req, res) {
    let scan = await Huejay.lights.scan();

    return res.status(200).json({ message: 'Started scanning... '});
  },

  on(req, res) {
    Effects.on();

    return res.status(200).json({ message: 'Lights are on.' });
  },

  off(req, res) {
    Effects.off();

    return res.status(200).json({ message: 'Lights are off.' });
  },

  fire(req, res) {
    Effects.fire();

    return res.status(200).json({ message: 'Lights are on fire.' });
  },

  ice(req, res) {
    Effects.ice();

    return res.status(200).json({ message: 'Lights are on ice.' });
  },

  waves(req, res) {
    Effects.wave();

    return res.status(200).json({ message: 'Lights are wavy.' });
  }

};
