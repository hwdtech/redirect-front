import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import HomePage from './pages/HomePage';
import MainLinkFormPage from './pages/MainLinkFormPage';
import SubLinkFormPage from './pages/SubLinkFormPage';
import ChainsPage from './pages/ChainsPage';
import NotFound from './pages/404';


const routerFactory = () => (
  <Router history={browserHistory}>
    <Route path="/" component={HomePage} />
    <Route path="main-link-form" component={MainLinkFormPage} />
    <Route path="sub-link-form" component={SubLinkFormPage} />
    <Route path="chains-of-actors" component={ChainsPage} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default routerFactory;
