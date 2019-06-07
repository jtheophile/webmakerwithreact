var connectionString = 'mongodb://127.0.0.1:27017/web-maker'; // for local host to connect to db

if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely | connect with heroku
  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds0000.mlab.com:29004/dasdasds'; // use yours
}

//imports the library
var mongoose = require("mongoose");
var db = mongoose.connect(
    connectionString,
    { useNewUrlParser: true }
);


module.exports = db;