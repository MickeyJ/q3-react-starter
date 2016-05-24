import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './layout/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import AuthPage from './pages/AuthPage'
import QuickSpeechPage from './pages/QuickSpeech'

export default class Routes extends Component {
  render(){
    return(
      <Router history={browserHistory}>
        <Route component={Layout}>
          <Route path="/" component={HomePage}>
            <IndexRoute component={AuthPage}/>
            <Route path="/register" component={AuthPage}/>
          </Route>
          <Route path="/about" component={AboutPage}/>
          <Route path="/quick" component={QuickSpeechPage}/>
        </Route>
      </Router>
    )
  }
}