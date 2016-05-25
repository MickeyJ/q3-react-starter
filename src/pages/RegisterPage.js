import React, { Component } from 'react'

import { connect } from 'react-redux'
import { userRegister } from '../redux/actions'

class RegisterPage extends Component{
  getNameText(ref){
    this.name = ref
  }
  getEmailText(ref){
    this.email = ref
  }
  getPassText(ref){
    this.password = ref
  }
  handleSubmit(e){
    e.preventDefault();
    let name = this.name.value,
        email = this.email.value,
        password = this.password.value;
    if(!password || !email || !name) return;
    this.name.value = null;
    this.email.value = null;
    this.password.value = null;
    return this.props.userRegister({name, email, password});
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <h1>{this.props.user.name}</h1>
        <input
        type="text"
        placeholder="Name"
        className="form-control"
        ref={(ref) => this.getNameText(ref)}
        />
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

function mapStateToProps(state) {
  return {user: state.user.cred}
}

export default connect(mapStateToProps, {
  userRegister
})(RegisterPage);
