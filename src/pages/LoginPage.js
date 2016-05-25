import React, { Component } from 'react'
import axios from 'axios'
import JWT from '../helpers/jwt_helper.js'


class LoginPage extends Component{
  getEmailText(ref){
    this.email = ref
  }
  getPassText(ref){
    this.password = ref
  }
  handleSubmit(e){
    e.preventDefault();
    // console.log(this.email.value);
    // console.log(this.password.value);
      axios.post('http://localhost:3000/api/v1/login', {
          email: this.email.value,
          password: this.password.value
      })
          .then(function (response) {
              // console.log("yay", response.data.token);
              JWT.save(response.data);
          })
          .catch(function (response) {
              console.log("catch blocked.. " + response);
          });
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
