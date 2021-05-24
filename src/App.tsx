import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Page, { sections } from "./Page";
import wackyReducer from "./connect/reducer";

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = createStore(wackyReducer, middleware);

const App = () => {
  return (
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
          <Redirect to="/" />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
