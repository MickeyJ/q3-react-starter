import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import transitionAuth from './helpers/transition_auth'

import Layout from './layout/Layout'
import Home from './pages/Home'
import HomeIndex from './pages/home/HomeIndex'
import AboutPage from './pages/home/AboutPage'
import RegisterPage from './pages/home/RegisterPage'
import LoginPage from './pages/home/LoginPage'
import Dashboard from './pages/Dashboard'
import DashIndex from './pages/dashboard/DashIndex'
import ProfilePage from './pages/dashboard/ProfilePage'
import QuickSpeechPage from './pages/dashboard/QuickSpeech'
import MyPhrasesPage from './pages/dashboard/MyPhrases'
import ConstructorPage from './pages/dashboard/Constructor'

const Routes = () =>(
  <Router history={browserHistory}>
    <Route component={Layout}>

      <Route path="/" component={Home}>
        <IndexRoute component={HomeIndex}/>
        <Route path="/register" component={RegisterPage}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/about" component={AboutPage}/>
      </Route>

      <Route path='/dashboard' component={Dashboard}>
        <IndexRoute component={DashIndex}/>
        <Route path="/profile" component={ProfilePage}/>
        <Route path="/quick" component={QuickSpeechPage}/>
        <Route path="/phrases" component={MyPhrasesPage}/>
        <Route path="/constructor" component={ConstructorPage}/>
      </Route>

    </Route>
  </Router>
);

export default Routes
