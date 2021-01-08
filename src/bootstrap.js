import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Router, Switch, Route } from "react-router-dom";
import App from "./components/app";

import reducers from "./reducers";

const store = createStore(
  reducers,
  compose(
    applyMiddleware(),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

import "./style/main.scss";

import history from "./history";
import Home from "./components/home";
import About from "./components/about-us";
import Contact from "./components/contact/contact-us";
import Auth from "./components/auth/auth";

function main() {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <App />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about-us" component={About} />
          <Route path="/contact-us" component={Contact} />
          <Route path="/auth" component={Auth} />
        </Switch>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
