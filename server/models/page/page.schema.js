const mongoose = require("mongoose");
const PageSchema = mongoose.Schema(
    {
        name: String,
        websiteID: {type: mongoose.Schema.Types.ObjectIF, ref: "WebsiteModel"},
        title: String,
        dateCreated: {type: Date, default: Date.now}
    }, {collection: "page"}

);

module.exports = PageSchema;