import React, { Component } from 'react'
import JWT from '../../helpers/jwt_helper'

import { connect } from 'react-redux'
import { userRegister } from '../../redux/actions'

import ErrorBox from '../../components/ErrorBox'

class RegisterPage extends Component{
  constructor(){
    super();
    this.state ={
      error: false
    };
  }
  getNameText(ref){
    this.name = ref
  }
  getEmailText(ref){
    this.email = ref
  }
  getPassText(ref){
    this.password = ref
  }
  onInputChange(e){
    // console.log(this.email.value);
  }
  handleSubmit(e){
    e.preventDefault();
    let name = this.name.value,
        email = this.email.value,
        password = this.password.value;
    if(!password || !email || !name) {
      this.setState({
        error: 'yo shit wrong'
      });
      return false;
    }
    return (
      this.props.userRegister({name, email, password})
        .then(res =>{
          if(res.payload.data.user){
            JWT.save(res.payload.data);
            this.context.router.go('/dashboard');
          } else {
            console.log(res.payload.data.error);
            this.setState({
              error: res.payload.data.error
            });
          }
        })
    )
  }
  render(){
    return(
      <form className="col-md-6 col-md-offset-3 register" onSubmit={this.handleSubmit.bind(this)}>
        <h2>Sign Up</h2>
        <ErrorBox error={this.state.error}/>
        <input
          type="text"
          placeholder="Name"
          className="form-control register"
          ref={(ref) => this.getNameText(ref)}
          onChange={(e) => this.onInputChange(e)}
        />
        <input
          type="text"
          placeholder="Email"
          className="form-control register"
          ref={(ref) => this.getEmailText(ref)}
          onChange={(e) => this.onInputChange(e)}
        />
        <input
          type="password"
          placeholder="Password"
          className="form-control"
          ref={(ref) => this.getPassText(ref)}
          onChange={(e) => this.onInputChange(e)}
        />
        <input className="btn btn-success register" type="submit" value="Sign Up"/>
      </form>
    )
  }
}

RegisterPage.contextTypes = {
  router: React.PropTypes.object
};

function mapStateToProps(state) {
  return {
    error: state.user.error
  }
}

export default connect(mapStateToProps, {
  userRegister
})(RegisterPage);
