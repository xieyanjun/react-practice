import React from 'react';
import { Router, Route } from 'dva/router';
import Example from './Example.js';
import RoutExample from './RoutExample.js';
import Message from './Message.js';
import { compose } from 'recompose';

const Routes = (
  <Router>
    <Route path="/" component={Message} />
    <Route path="about" component={RoutExample} />
    <Route path="message" component={Message} /> 
    <Route path="message/:id" component={Example} /> 
  </Router>
  
);

export default Routes;
