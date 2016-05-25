import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './layout/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import QuickSpeechPage from './pages/QuickSpeech'
import Dashboard from './pages/Dashboard'
import ProfilePage from './pages/ProfilePage'

const Routes = () =>(
  <Router history={browserHistory}>
    <Route component={Layout}>
      <Route path="/" component={HomePage}/>
      <Route path="/register" component={RegisterPage}/>
      <Route path="/login" component={LoginPage}/>
      <Route path="/about" component={AboutPage}/>
      <Route path="/quick" component={QuickSpeechPage}/>
      <Route path='/dashboard' component={Dashboard}/>
      <Route path="/profile" component={ProfilePage}/>
    </Route>
  </Router>
);

export default Routes
