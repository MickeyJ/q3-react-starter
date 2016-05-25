import React from 'react'
import ReactDOM, { render } from 'react-dom'
import 'react-fastclick';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import promise from 'redux-promise'

import reducers from './redux/reducers'

import './style/main.scss'

const storeWithMiddleware = applyMiddleware(
  logger(), promise
)(createStore);

import Routes from './routes'

render(
  <Provider store={storeWithMiddleware(reducers)}>
    <Routes />
  </Provider>,
  document.getElementById('app')
);
