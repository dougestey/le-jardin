/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  'GET /lights' : 'LightController.getAll',
  'GET /lights/scan' : 'LightController.scan',

  'GET /lights/all/off': 'LightController.allOff',
  'GET /lights/all/on': 'LightController.allOn',
  'GET /lights/all/fire': 'LightController.allFire',
  'GET /lights/all/ice': 'LightController.allIce',
  'GET /lights/all/greet': 'LightController.allGreet',

  'GET /sensors/:pin': 'SensorController.read',
  'GET /sensors/:pin/start': 'SensorController.start',
  'GET /sensors/:pin/stop': 'SensorController.stop'

};
