import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App';
import MainLinkFormPage from './pages/MainLinkFormPage';

const NotFound = () => (
  <h1>404.. This page is not found!</h1>
);

const routerFactory = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="main-link-form" component={MainLinkFormPage} />
    <Route path="links" component={App} />
    <Route path="sub-link-form" component={NotFound} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default routerFactory;
