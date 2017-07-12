import React from 'react';
import { Router } from 'dva/router';
import routes from './routes';

const onUpdate = () => {
  logPageView();
  hashLinkScroll();
};
const RouterConfig = ({ history }) => {
  return (
    <Router history={history} onUpdate={onUpdate}>
      {routes}
    </Router>
  );
};

export default RouterConfig;
