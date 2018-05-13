module.exports = {

  async getAll(req, res) {
    let lights = await Huejay.lights.getAll();

    return res.status(200).json(lights);
  },

  async scan(req, res) {
    let scan = await Huejay.lights.scan();

    return res.status(200).json({ message: 'Started scanning... '});
  },

  async allOn(req, res) {
    let lights = await Huejay.lights.getAll();
    lights = lights.map((light) => light.reachable);

    for (let light of lights) {
      light.on = true;
      light.brightness = 100;
      light.saturation = 100;
      light.colorTemp = 389;
      light.transitionTime = 3;

      await Huejay.lights.save(light);
    }

    return res.status(200).json({ message: 'Lights are on.' });
  },

  async allOff(req, res) {
    let lights = await Huejay.lights.getAll();
    lights = lights.map((light) => light.reachable);

    for (let light of lights) {
      light.on = false;
      light.transitionTime = 3;

      await Huejay.lights.save(light);
    }

    return res.status(200).json({ message: 'Lights are off.' });
  },

  async allFire(req, res) {
    let rndm = (m) => { return Math.floor(Math.random() * m) + 1; };
    let lights = await Huejay.lights.getAll();
    lights = lights.map((light) => light.reachable);

    let run = async() => {
      for (let light of lights) {
        light.on = true;
        light.hue = rndm(8000);
        light.brightness = rndm(60);
        light.transitionTime = 0.5;
  
        await Huejay.lights.save(light);
      }
    };

    setInterval(run, 10000);

    return res.status(200).json({ message: 'Lights are on fire.' });
  },

  async waves(req, res) {
    let lights = await Huejay.lights.getAll();
    lights = lights.map((light) => light.reachable);

    let run = async(light) => {
      light.on = true;
      light.hue = 45000;
      light.brightness = 20;
      light.saturation = 100;
  
      await Huejay.lights.save(light);

      setTimeout(() => {
        light.on = false;
        Huejay.lights.save(light);
      }, 250);
    }
  
    setTimeout(() => run(lights[0]), 1000);
    setTimeout(() => run(lights[3]), 2000);
    setTimeout(() => run(lights[4]), 3000);

    return res.status(200).json({ message: 'Lights are wavy.' });
  }

};
