const mongoose = require("mongoose");

const PageSchema = mongoose.Schema(
    {
        name: String,
        websiteId: {type: mongoose.Schema.Types.ObjectId, ref: "WebsiteModel"},
        title: String,
        dateCreated: {type: Date, default: Date.now}
    }, {collection: "page"}
);

module.exports = PageSchema;