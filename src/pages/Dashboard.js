import React, { Component } from 'react'
import { connect } from 'react-redux'
import { verifyUser, getUserCategories, addPhrase } from '../redux/actions'

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
        } else {
          this.props.getUserCategories(this.props.user.id).then(res =>{
            console.log(res);

          });
        }
      })
    }
  }
  render(){
    return (
      <div>
        {React.cloneElement(this.props.children, {
          user: this.props.user,
          phrases: this.props.phrases,
          addPhrase: this.props.addPhrase
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
    phrases: state.phrases.categoriesBody
  }
}

export default connect(mapStateToProps, {
  verifyUser,
  getUserCategories,
  addPhrase
})(Dashboard);