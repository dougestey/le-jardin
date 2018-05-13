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

    for (let light of lights) {
      light.on = true;
      light.brightness = 100;
      light.saturation = 100;
      light.colorTemp = 389;

      await Huejay.lights.save(light);
    }

    return res.status(200).json({ message: 'Lights are on. '});
  },

  async allOff(req, res) {
    let lights = await Huejay.lights.getAll();

    for (let light of lights) {
      light.on = false;
      await Huejay.lights.save(light);
    }

    return res.status(200).json({ message: 'Lights are off. '});
  },

  async allFire(req, res) {
    let rndm = (m) => { return Math.floor(Math.random() * m) + 1; };

    let lights = await Huejay.lights.getAll();

    let run = async() => {
      for (let light of lights) {
        light.on = true;
        light.hue = rndm(8000);
        light.brightness = rndm(60);
  
        try {
          await Huejay.lights.save(light);
        } catch (e) {
          console.log(e);
        }
      }
    };

    setInterval(run, 10000);

    return res.status(200).json({ message: 'Lights are off. '});
  },

  async waves(req, res) {
    // let rndm = (m) => { return Math.floor(Math.random() * m) + 1; };

    let lights = await Huejay.lights.getAll();

    // let run = async() => {
    let run = async(light) => {
      light.on = true;
      light.hue = 45000;
      light.brightness = 20;
      light.saturation = 100;
      // light.colorTemp = 500;
  
     Huejay.lights.save(light);

      setTimeout(() => {
        light.on = false;
        Huejay.lights.save(light);
      }, 250);
    }
  
    // let delay = 0;

    // for (let light of lights) {
      // delay = delay + 1000;
    setTimeout(() => run(lights[0]), 1000);
    setTimeout(() => run(lights[3]), 2000);
    setTimeout(() => run(lights[4]), 3000);
    // }
    // }

    // for (var i; i < lights.length; i++) {
    //   let light = lights[i];
    //   console.log(light);

    //   setTimeout(() => {
    //     run(light);
    //   }, 1000);
    // }

    // setInterval(run, 5000);

    return res.status(200).json({ message: 'Lights are wavy. '});
  }

};
