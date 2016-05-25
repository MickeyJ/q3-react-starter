import React, { Component } from 'react'
import { connect } from 'react-redux'

import { verifyUser } from '../redux/actions'

import SpeakBox from '../components/SpeakBox';

class Dashboard extends Component{
  constructor(){
    super();
  }
  componentWillMount(){
    return this.props.verifyUser()
  }
  render(){
    return (
      <div >
        <h1>{this.props.user.name}</h1>
        {this.props.children}
        <SpeakBox />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {user: state.user.cred}
}

export default connect(mapStateToProps, {
  verifyUser
})(Dashboard);

