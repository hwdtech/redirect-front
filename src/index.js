import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { reduxHttpMiddleware } from 'redux-http-middleware';
import axios from 'axios';
import app from './reducers';
import Router from './Router';
import { getMainLinks, getSubLinks } from './middleware';


const store = createStore(
  app,
  applyMiddleware(
    reduxHttpMiddleware(axios),
  ),
);

store.dispatch(getMainLinks());
store.dispatch(getSubLinks());

render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root'),
);
