import React, { Component } from 'react'
import { connect } from 'react-redux'
import { verifyUser } from '../redux/actions'

import JWT from '../helpers/jwt_helper'

class Home extends Component{
  componentWillMount(){
    if(!JWT.fetch()){
      return false
    } else {
      return this.props.verifyUser().then(x => {
        if (x.payload.data.user) {
          this.context.router.replace('/dashboard');
        }
      })
    }
  }
  render(){
    return(
      <div>
        {React.cloneElement(this.props.children, {
          selectedVoice: this.props.selectedVoice,
        })}
      </div>
    )
  }
}

Home.contextTypes = {
  router: React.PropTypes.object
};

function mapStateToProps(state) {
  return {user: state.user.cred}
}

export default connect(mapStateToProps, {
  verifyUser
})(Home);
