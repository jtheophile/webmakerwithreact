const mongoose = require("mongoose");


// schema is the structure of the user
const UserSchcema = mongoose.Schema(
    {
        username: String,
        password: String,
        firstName: {type: String, default: ""},
        lastName: {stype: String, default: ""},
        email: 
        {type: String, default: ""},
        dateCreated: {type: Date, default: Date.now}
    }, {collection: "user"} //where it is stored in the db
);

module.exports = UserShcema