import React from 'react'
import { render } from 'react-dom'
import 'react-fastclick';

import './style/main.scss'

import Routes from './routes'

render(
  <Routes />,
  document.getElementById('app')
);