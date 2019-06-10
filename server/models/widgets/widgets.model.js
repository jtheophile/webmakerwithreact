const mongoose = require("mongoose"); 
const WidgetSchema = require("./widget.schema");
const WidgetModel = mongoose.model("WidgetModel", WidgetSchema);

//createWidget
WidgetModel.createWidget = (widget) => {
    return WidgetModel.create(widget);
}

//Find Widgets for page
WidgetModel.findWidgetsForPage = (pid) => {
    return WidgetModel.find({ pageId: pid});
}

//find widget by id
WidgetModel.findWidget = (wgid) => {
    return WidgetModel.findById(wgid);
}

// delete widget
WidgetModel.deleteWidget = (wgid) => {
    return WidgetModel.deleteOne({_id: wgid});
}

// update widget
WidgetModel.updateWidget = (widget) => {
    return WidgetModel.updateOne({_id: widget._id}, widget);
}

module.exports = WidgetModel;