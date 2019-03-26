import React from 'react';
import Login from '../Login/index'
import { Switch, Route } from 'react-router-dom';
import Registeration from '../Registeration/index'
import DefaultContainer from '../DefaultContainer/index'

const App = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/register" component={Registeration} />
    <Route path="/" component={DefaultContainer} />
  </Switch>
);

export default App;
