import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Layout from './layout/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

export default class Routes extends Component {
  render(){
    return(
      <Router history={browserHistory}>
        <Route component={Layout}>
          <Route path="/" component={HomePage}/>
          <Route path="/about" component={AboutPage}/>
        </Route>
      </Router>
    )
  }
}