import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Page, { sections } from "./Page";
import About from "./About";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={Page} />
        {Object.values(sections).map((section) => {
          return (
            <Route path={"/" + section} exact key={section}>
              <Page section={section} />
            </Route>
          );
        })}
        <Route path="/about" exact component={About} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
