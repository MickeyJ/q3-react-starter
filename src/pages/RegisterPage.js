import React, { Component } from 'react'

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
    console.log(this.name.value);
    console.log(this.email.value);
    console.log(this.password.value);
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
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
        <input className="btn btn-success" type="submit" value="Sign Up"/>
      </form>
    )
  }
}

export default RegisterPage
