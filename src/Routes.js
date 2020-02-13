import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { RouteWithLayout } from "./components";
import { Dashboard as DashboardView } from "./views";

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      <RouteWithLayout component={DashboardView} exact path="/dashboard" />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
