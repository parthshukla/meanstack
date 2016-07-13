/* 
 * @version: 0.0.1
 * @author : Parth<parthshukla1985@gmail.com>
 * @purpose : Handling API calls
 */

// modules =================================================
var express = require('express'),
    bodyparser = require('body-parser'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    //Get the credentials from config
    dbConnection = require('./app/config/credentials.js'),
    port = 8000,
    app = express();
 
//Connecting to MongoDB
mongoose.connect(dbConnection.url, function (err, res) {
    if (err) {
        console.log('ERROR connecting to: ' + dbConnection + '. ' + err);
    } else {
        console.log('Successfully connected to: ' + dbConnection);
    }
}); 

// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyparser.json());
app.use(morgan('dev'));

//gives the static pages access
app.use(express.static(__dirname + '/public'));

//requiring the routes
require('./app/routes/server.routes.js')(app);

// set our port
app.listen(port, function () {
    console.log('Server on port', port);
});

module.exports = app;
