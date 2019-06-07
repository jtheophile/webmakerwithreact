const mongoose = require("mongoose");

const WebsiteSchcema = mongoose.Schema({
        name: String,
        developerId: {type: mongoose.Schema.Types.ObjectId, ref:"UserModel"},
        description: {type: String, default: ""},
        dateCreated: {type: Date, default: Date.now}
    }, {collection: "website"});

module.exports = WebsiteShcema;

moodule/tttttt