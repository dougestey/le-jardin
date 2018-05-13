module.exports = {

  read(req, res) {
    let pin = parseInt(req.params.pin);
    let value = Sensors.IRAlpha.read(pin);

    return res.status(200).json({ message: `Success`, value, pin });
  },

  start(req, res) {
    let pin = parseInt(req.params.pin);
    Sensors.IRAlpha.start(pin);

    return res.status(200).json({ message: `Sensor is watching for humans.` });
  },

  stop(req, res) {
    let pin = parseInt(req.params.pin);
    Sensors.IRAlpha.stop(pin);

    return res.status(200).json({ message: `Sensor is going to sleep.` });
  }

};
