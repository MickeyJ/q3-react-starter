import React, { Component } from 'react'

import { connect } from 'react-redux'
import { userLogin } from '../redux/actions'

class LoginPage extends Component{
  getEmailText(ref){
    this.email = ref
  }
  getPassText(ref){
    this.password = ref
  }
  handleSubmit(e){
    e.preventDefault();
    let email = this.email.value,
        password = this.password.value
    if (!password || !email) return;
    return this.props.userLogin({email, password});
  }
  render() {
    return (
      <form className="col-md-6 col-md-offset-3 login" onSubmit={this.handleSubmit.bind(this)}>
        <h1>{this.props.user.name}</h1>
        <input
          type="text"
          placeholder="Email"
          className="form-control login"
          ref={(ref) => this.getEmailText(ref)}
        />
        <input
          type="password"
          placeholder="Password"
          className="form-control login"
          ref={(ref) => this.getPassText(ref)}
        />
        <input className="btn btn-success" type="submit" value="Log In"/>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {user: state.user.cred}
}

export default connect(mapStateToProps, {
  userLogin
})(LoginPage);
