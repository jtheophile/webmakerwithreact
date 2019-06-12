var connectionString = 'mongodb://127.0.0.1:27017/web-maker'; // for local host to connect to db

if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely | connect with heroku
  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds011725.mlab.com:11725/heroku_56h4r1gp'; // use yours
}

//imports the library
var mongoose = require("mongoose");
var db = mongoose.connect(
    connectionString,
    { useNewUrlParser: true }
);


module.exports = db;