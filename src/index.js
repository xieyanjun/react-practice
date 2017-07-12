import dva, { connect } from 'dva';
import { Router, Route, browserHistory } from 'dva/router';
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo';
import fetch from 'dva/fetch';
import { browserHistory } from 'dva/router';
import React from 'react';
import './index.html';
import styles from './index.less';

// 实例化 ApolloClient
const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://localhost:4000/api' }),
});
// 1. Initialize
const app = dva({
  history: browserHistory,
});

// 2. Model
// Remove the comment and define your model.
//app.model({});

// 3. Router
const HomePage = () => <div>Hello Hello Dva.</div>;
app.router(({ history }) =>
  <Router history={history}>
    <Route path="/" component={HomePage} /> 
  </Router>
);



// 4. Start
app.start('#root');

