import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './layout/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import ProfilePage from './pages/ProfilePage'
import QuickSpeechPage from './pages/QuickSpeech'
import MyPhrasesPage from './pages/MyPhrases'

const Routes = () =>(
  <Router history={browserHistory}>
    <Route component={Layout}>
      <Route path="/" component={HomePage}/>
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
