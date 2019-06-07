import React, { Component } from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// this connects the router dom package to display the site  (the package is downloaded from the internet and it has the nodes pre-installed)

//users
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Profile from "./components/user/Profile";
//sites
import WebsiteList from "./components/website/WebsiteList";
import WebsiteNew from "./components/website/WebsiteNew";
import WebsiteEdit from "./components/website/WebsiteEdit"
//pgs
import PageList from "./components/page/PageList";
import PageNew from "./components/page/PageNew";
import PageEdit from "./components/page/PageEdit";
// widgets
import WidgetList from "./components/widget/WidgetList";
import WidgetChoose from "./components/widget/WidgetChoose";
import WidgetEdit from "./components/widget/WidgetEdit";

class App extends Component {

      render () {
          return (
              <Router>
                  <Switch>
                      <Route exact path="/" component={Login} />
                      <Route exact path="/login" component={Login} />
                      <Route exact path="/register" component={Register} />
                      <Route exact path="/user/:uid" component ={Profile} />
                      <Route exact path="/user/:uid/website" component={WebsiteList} />
                      <Route exact path="/user/:uid/website/new" component={WebsiteNew} />
                      <Route exact path="/user/:uid/website/:wid" component={WebsiteEdit} />
                      <Route exact path="/user/:uid/website/:wid/page" component={PageList} />
                      <Route exact path="/user/:uid/website/:wid/page/new" component={PageNew} />
                      <Route exact path="/user/:uid/website/:wid/page/:pid" component={PageEdit} />
                      <Route exact path="/user/:uid/website/:wid/page/:pid/widget" component={WidgetList} />
                      <Route exact path="/user/:uid/website/:wid/page/:pid/widget/new" component={WidgetChoose} />
                      <Route exact pather="/user/:uid/website/:wid/page/:pid/widget/:wgid" componenet={WidgetEdit} />
                  </Switch>
              </Router>
      );
    }
}      

export default App;