module.exports = function(app) {

    const widgetModel = require("../models/widget/widget.model")

    //find widgets by given page id
    app.get("/api/page/:pid/widget", async (req, res)=>{
        const pid = req.params["pid"]
        const widgets = await widgetModel.findWidgetsForPage(pid);
        res.json(widgets);
    });

    // create new widget
    app.post("/api/widget", async (req, res) => {
        const newWidget = req.body;
        const data = await widgetModel.createWidget(newWidget);
        res.json(data);
    });

    // get widgets by id
    app.get("/api/widget/:wgid", async (req, res)=> {
        const wgid = req.params["wgid"];
        const widget = await widgetModel.findWidget(wgid)
        res.json(widget);
    })

    //update widget
    app.put("/api/widget", async (req, res)=> {
        const newWidget = req.body;
        const data = await widgetModel.updateWidget(newWidget);
        res.json(data);
    });

    //delete widget by give id
    app.delete("/api/widget/:wgid", async (req, res) => {
        const wgid = req.params["wgid"];
        const data = await widgetsModel.deleteWidget(wgid);        
        res.json(data);
    });
};