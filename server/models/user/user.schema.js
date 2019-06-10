const mongoose = require("mongoose");


// schema is the structure of the user
const UserSchema = mongoose.Schema(
    {
        username: String,
        password: String,
        firstName: {type: String, default: ""},
        lastName: {type: String, default: ""},
        email: {type: String, default: ""},
        dateCreated: {type: Date, default: Date.now}
    }, {collection: "user"} //where it is stored in the db
);

module.exports = UserSchema