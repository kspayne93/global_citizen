import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../src/views/Home/Home';
import Cities from '../src/views/Cities/Cities';

export default (
   <Switch>
      <Route component={Home} exact path='/' ></Route>
      <Route component={Cities} path='/cities' ></Route>
   </Switch>
)