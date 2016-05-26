import React, { Component } from 'react'
import JWT from '../helpers/jwt_helper'

import Navbar from './Navbar'

class Layout extends Component{
  handleLogout(){
    JWT.destroy();
    this.context.router.replace('/');
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

Layout.contextTypes = {
  router: React.PropTypes.object
};

export default Layout