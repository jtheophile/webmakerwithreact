module.exports = function(app) {

    const pageModel = require("../models/page/page.model");
    
    //all pages for this website 
    app.get("/api/website/:wid/page", async (req, res) => {
        const wid = req.params["wid"];
        const websites = await pageModel.findAllPagesForWebsite(wid);
        res.json(websites);      
    });

    // add new page
    app.post("/api/page", async (req, res) => {
        const newPage = req.body;
        const data = await pageModel.createPage(newPage);
        res.json(data);
    });

    // get page by given id
    app.get("/api/page/:pid", async (req, res) => {
        const pid = req.params["pid"];
        const page = await pageModel.findPageById(pid);
        res.json(page);
        });

    // delete page
    app.delete("/api/page/:pid", async (req, res) => {
        const pid = req.params["pid"];
        const data = await pageModel.deletePage(pid);
        res.json(data);
    });

    // update page
    app.put("/api/page", async (req, res) => {                
        const newPage = req.body;                       
        const data = await pageModel.updatePage(newPage);
        res.json(data);
        });
};
