const mongoose = require("mongoose");
const UserSchema = require("./user.schema");
const UserModel = mongoose.model("UserModel", UserSchema)

// create new user into mongodb
UserModel.createUser = (user) => {
    return UserModel.create(user);
}

// find user by credentials
UserModel.findUserByCredentials(username, password) => {
    return UserModel.findOne({username:username, password:password});
}

// find user by username
UserModel.findUserByUsername = function (username) => {
    return UserModel.findOne({username:username});
}

//find user by id
UserModel.findUserbyId = (uid) => {
    return UserModel.findById(uid);
}

// update user
UserModel.updatUser = (user) => {
    return UserModel.updateOne({_id: user._id, user});
}
module.exports = UserModel;