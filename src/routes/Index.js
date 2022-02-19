import React, { Fragment } from "react";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import dashboard from "../components/dashboard";
import signup from "../components/signup";
import Signin from "../components/signin";

const MainRouter = () => {
  const Authnticated = () => {
    const logedIn = localStorage.getItem("user");
    debugger;
    if (logedIn) {
      return (
        <Router>
          <Switch>
            <Route exact path="/dashboard" component={dashboard} />
          </Switch>
        </Router>
      );
    } else {
      return (
        <Router>
          <Switch>
            <Redirect to="/signin" />
          </Switch>
        </Router>
      );
    }
  };

  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/signup" component={signup} />
          <Route exact path="/signin" component={Signin} />
          <Authnticated />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default MainRouter;
