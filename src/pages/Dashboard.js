import React, { Component } from 'react'
import { connect } from 'react-redux'
import { verifyUser, getUserCategories } from '../redux/actions'

import JWT from '../helpers/jwt_helper'
import SpeakBox from '../components/SpeakBox'

class Dashboard extends Component{
  componentWillMount(){
    if(!JWT.fetch()){
      this.context.router.replace('/');
    } else {
      return this.props.verifyUser().then(res =>{
        if(this.props.error === 'invalid token'){
          JWT.destroy();
          this.context.router.replace('/');
        }
      })
    }
  }
  render(){
    return (
      <div>
        {React.cloneElement(this.props.children, {
          user: this.props.user,
        })}
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
    error: state.user.error,
  }
}

export default connect(mapStateToProps, {
  verifyUser,
  getUserCategories
})(Dashboard);