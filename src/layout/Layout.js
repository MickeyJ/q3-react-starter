import React, { Component } from 'react'
import { Router, Link } from 'react-router'
import { connect } from 'react-redux'

import JWT from '../helpers/jwt_helper'

class Layout extends Component{
  handleLogout(){
    JWT.destroy();
    Router.transitionTo('/')
  }
  render(){
    if(this.props.user.name){
      return(
        <div className="container-fluid">

          <Link to="/">Home</Link>
          <span> | </span>
          <Link to="/about">About</Link>
          <span> | </span>
          <Link to="/quick">Quick Speak</Link>
          <span> | </span>
          <Link to="/dashboard">Dashboard</Link>
          <span> | </span>
          <Link to="/profile">Profile</Link>
          <span> | </span>
          <Link to="/" onClick={this.handleLogout.bind(this)}>Logout</Link>
          <main>
            {this.props.children}
          </main>

        </div>
      )
    } else {
      return(
        <div className="container-fluid">
          <Link to="/">Home</Link>
          <span> | </span>
          <Link to="/about">About</Link>
          <span> | </span>
          <Link to='/register'>Sign Up</Link>
          <span> | </span>
          <Link to='/login'>Log In</Link>

          <main>
            {this.props.children}
          </main>
        </div>
      )
    }

  }
}


function mapStateToProps(state) {
  return {user: state.user.cred}
}

export default connect(mapStateToProps)(Layout);
