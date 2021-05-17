import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Page, { sections } from "./Page";
import About from "./About";
import wackyReducer from "./connect/reducer";

const middleware = composeWithDevTools();
const store = createStore(wackyReducer, middleware);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
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
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
