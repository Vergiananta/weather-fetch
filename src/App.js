import {
  BrowserRouter as Router,
  Route,
  Switch, Redirect
} from "react-router-dom";
import './App.css';
import React, { Fragment } from 'react';
import {Provider} from 'react-redux';
import store from './configs/store';
import  routes  from "./configs/routes";
import Dashboard from "./pages/dashboard/dashboard";

function App() {
  return (
    <Provider data-testid="provider" store={store}>
  
      <Router>
        <Switch>
          <Redirect exact from="/" to="/dashboard"/>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} exact={route.exact}>
              {route.component}
            </Route>)
          )}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
