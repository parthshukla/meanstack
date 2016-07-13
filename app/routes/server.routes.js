/* 
 *  @version: 0.0.1
 *  @author : Parth<parthshukla1985@gmail.com>
 *  @purpose : Routing the requests   
 */

// =======================server routes====================================
var controllers = require('../controllers/server.controller.js');
module.exports = function (app) {
    // handle things like api calls
    app.route('/').get(controllers.renderIndexPage);
    app.get('/user', controllers.getUserDetails);
    app.get('/user/:id', controllers.getUserById);
    app.post('/user', controllers.addUserDetails);
    app.put('/user/:id', controllers.updateUser);
    app.delete('/user/:id', controllers.deleteUser);
};

