import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Transacoes from "../pages/Transacoes";

function Routes() {
  return (
    <Switch>
      <Route path="/dashboard" exact={true} component={Dashboard}  />
      <Route path="/transacoes" component={Transacoes} />
      <Redirect from="/" to="/dashboard" />
    </Switch>
  );
}

export default Routes;
