import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SecureRoute from '../auth/secure-route';
import Authors from './authors';
import Home from './home';
import Login from './login';

const Pages = () => (
  <Switch>
    <Route path="/login" exact component={Login} />
    <SecureRoute path="/" exact component={Home} />
    <SecureRoute path="/authors" exact component={Authors} />
  </Switch>
);

export default Pages;
