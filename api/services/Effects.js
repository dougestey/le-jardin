let rndm = (s, e) => { return Math.floor(Math.random() * e) + s; };

let interval1 = 0,
    interval2 = 0,
    interval3 = 0;

let _clearAllIntervals = () => {
  if (interval1)
    clearInterval(interval1);

  if (interval2)
    clearInterval(interval2);

  if (interval3)
    clearInterval(interval3);
};

module.exports = {

  async allOn() {
    _clearAllIntervals();

    let lights = await Huejay.lights.getAll();
    lights = lights.filter((light) => light.reachable);

    for (let light of lights) {
      light.on = true;
      light.brightness = 100;
      light.saturation = 100;
      light.colorTemp = 389;
      light.transitionTime = 3;

      await Huejay.lights.save(light);
    }
  },

  async allOff() {
    _clearAllIntervals();

    let lights = await Huejay.lights.getAll();
    lights = lights.filter((light) => light.reachable);

    console.log(lights[0]);

    for (let light of lights) {
      light.on = false;
      light.transitionTime = 3;

      await Huejay.lights.save(light);
    }
  },

  async allRotate() {
    _clearAllIntervals();

    let lights = await Huejay.lights.getAll();
    lights = lights.filter((light) => light.reachable);

    let run = async() => {
      for (let light of lights) {
        light.on = true;
        light.hue = rndm(0, 65000);
        light.brightness = rndm(0, 100);
        light.transitionTime = 0.5;

        await Huejay.lights.save(light);
      }
    };

    interval1 = setInterval(run, 500);
  },

  async allGreet() {
    _clearAllIntervals();

    let lights = await Huejay.lights.getAll();
    lights = lights.filter((light) => light.reachable);

    let rndmHue = rndm(0, 52000);

    let run = async(light) => {
      light.on = true;
      light.hue = rndmHue;
      light.brightness = 100;
      light.saturation = 100;
      light.transitionTime = 1;

      await Huejay.lights.save(light);
    }

    setTimeout(() => run(lights[0]), 1000);
    setTimeout(() => run(lights[1]), 2000);
    setTimeout(() => run(lights[2]), 3000);
  }

};
