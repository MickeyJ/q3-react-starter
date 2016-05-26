import React, { Component } from 'react'
import { Router } from 'react-router'
import JWT from '../helpers/jwt_helper'

import Navbar from './Navbar'

class Layout extends Component{
  handleLogout(){
    JWT.destroy();
    Router.transitionTo('/')
  }
  render(){
    return(
      <div className="container-fluid">
        <Navbar
          token={JWT.fetch()}
          handleLogout={this.handleLogout.bind(this)}
        />
        <main>
          {this.props.children}
        </main>

      </div>
    )
  }
}

export default Layout