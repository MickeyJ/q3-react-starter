import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import transitionAuth from './helpers/transition_auth'

import Layout from './layout/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import RegisterPage from './pages/auth/RegisterPage'
import LoginPage from './pages/auth/LoginPage'
import Dashboard from './pages/dashboard/Dashboard'
import ProfilePage from './pages/dashboard/ProfilePage'
import QuickSpeechPage from './pages/dashboard/QuickSpeech'
import MyPhrasesPage from './pages/dashboard/MyPhrases'

const Routes = () =>(
  <Router history={browserHistory}>
    <Route component={Layout}>
      <Route onEnter={transitionAuth} path="/" component={HomePage}/>
      <Route path="/register" component={RegisterPage}/>
      <Route path="/login" component={LoginPage}/>
      <Route path="/about" component={AboutPage}/>
      <Route path='/dashboard' component={Dashboard}/>
      <Route path="/profile" component={ProfilePage}/>
      <Route path="/quick" component={QuickSpeechPage}/>
      <Route path="/phrases" component={MyPhrasesPage}/>
    </Route>
  </Router>
);

export default Routes
