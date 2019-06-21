const mongoose = require("mongoose");
const UserSchema = require("./user.schema");
const UserModel = mongoose.model("UserModel", UserSchema)

// create new user into mongodb
UserModel.createUser = (user) => {
    return UserModel.create(user);
}

// find user by credentials
UserModel.findUserByCredentials = (username, password) => {
    return UserModel.findOne({username:username, password:password});
}

// find user by username
UserModel.findUserByUsername = (username) => {
    return UserModel.findOne({username:username});
}

//find user by id
UserModel.findUserById = (uid) => {
    return UserModel.findById(uid);
}

// update user
UserModel.updateUser = (user) => {
    return UserModel.updateOne({_id:user._id}, user);
}

// find all users
UserModel.findAllUsers = () => {
    return UserModel.find();
}

module.exports = UserModel;