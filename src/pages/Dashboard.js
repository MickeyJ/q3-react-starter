import React, { Component } from 'react'
import { connect } from 'react-redux'
import { verifyUser } from '../redux/actions'

import JWT from '../helpers/jwt_helper'
import SpeakBox from '../components/SpeakBox';

class Dashboard extends Component{
  constructor(){
    super();
    this.state = {
      username: ''
    }
  }
  componentWillMount(){
    if(!JWT.fetch()){
      this.context.router.replace('/');
    } else {
      return this.props.verifyUser().then(res =>{
        if(this.props.error === 'invalid token' || res.status === 500){
          JWT.destroy();
          this.context.router.replace('/');
        } else {
          this.setState({
            username: this.props.user.name
          });
        }
      })
    }
  }
  render(){
    return (
      <div >
        <h1>{this.state.username}</h1>
        {React.cloneElement(this.props.children, {user: this.props.user})}
      </div>
    )
  }
}

Dashboard.contextTypes = {
  router: React.PropTypes.object
};

function mapStateToProps(state) {
  return {
    user: state.user.cred,
    error: state.user.error
  }
}

export default connect(mapStateToProps, {
  verifyUser
})(Dashboard);