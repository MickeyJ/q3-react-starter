import React, { Component } from 'react'

class LoginPage extends Component{
  getEmailText(ref){
    this.email = ref
  }
  getPassText(ref){
    this.password = ref
  }
  handleSubmit(e){
    e.preventDefault();
    console.log(this.email.value);
    console.log(this.password.value);
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
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

export default LoginPage
