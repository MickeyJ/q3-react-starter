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
<<<<<<< HEAD
    let email = this.email.value,
        password = this.password.value
    if (!password || !email) return;
    return this.props.userLogin({email, password});

=======
    let email = this.email.value, 
        password = this.password.value;
    if(!password || !email) return;
    return this.props.userLogin({email, password});
>>>>>>> 3f2dd32febf142b6e4044f246210f745f5e8e609
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <h1>{this.props.user.name}</h1>
        <input
          type="text"
          placeholder="Email"
          className="form-control"
          ref={(ref) => this.getEmailText(ref)}
        />
        <input
          type="password"
          placeholder="Password"
          className="form-control"
          ref={(ref) => this.getPassText(ref)}
        />
        <input className="btn btn-success" type="submit" value="Log In"/>
      </form>
    )
  }
}

<<<<<<< HEAD
function mapStateToProps(state) {
=======
function mapStateToProps(state){
>>>>>>> 3f2dd32febf142b6e4044f246210f745f5e8e609
  return {user: state.user.cred}
}

export default connect(mapStateToProps, {
  userLogin
})(LoginPage);
