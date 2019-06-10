const mongoose = require("mongoose");
const PageSchema = require("./page.schema");
const PageModel = mongoose.model("PageModel", PageSchema);

// find all pgs for website
PageModel.findAllPagesForWebsite = (wid) => {
    return PageModel.find({websiteId: wid});
}

// Create page
PageModel.createPage = (page) => {
    return PageModel.create(page);
}

// find page by id
PageModel.findPageById = (pid) => {
    return PageModel.findById(pid);
}

//delete pg
PageModel.deletePage = (pid) => {
    return PageModel.deleteOne({_id: pid});
}

// update pg
PageModel.updatePage = (page) => {
    return PageModel.updateOne({_id: page._id}, page);
    }

    module.exports = PageModel;