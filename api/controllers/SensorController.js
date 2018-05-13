module.exports = {

  read(req, res) {
    let pin = parseInt(req.params.pin);
    let value = Sensors.IRAlpha.read(pin);

    return res.status(200).json({ message: `Success`, value, pin });
  }

};
