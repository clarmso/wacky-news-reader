import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DarkMode from "./DarkMode";
import LightMode from "./LightMode";
import NinetysKids from "./NinetysKids";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/dark" exact component={DarkMode} />
        <Route path="/light" exact component={LightMode} />
        <Route path="/90s" exact component={NinetysKids} />
        <Route path="/" exact component={LightMode} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
