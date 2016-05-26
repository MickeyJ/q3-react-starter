import React, { Component } from 'react'
import JWT from '../../helpers/jwt_helper'

import { connect } from 'react-redux'
import { userLogin } from '../../redux/actions'

import ErrorBox from '../../components/ErrorBox'

class LoginPage extends Component{
  constructor(){
    super();
    this.state ={
      error: false
    };
  }
  getEmailText(ref){
    this.email = ref;
  }
  getPassText(ref){
    this.password = ref
  }
  onInputChange(e){
    // console.log(this.email.value);
  }
  handleSubmit(e){
    e.preventDefault();
    let email = this.email.value,
        password = this.password.value;
    if (!password || !email) {
      this.setState({
        error: 'yo shit wrong'
      });
      return false
    }
    return (
      this.props.userLogin({email, password})
        .then(res =>{
          if(res.payload.data.user){
            JWT.save(res.payload.data);
            this.context.router.go('/dashboard');
          } else {
            this.setState({
              error: res.payload.data.error
            });
          }
        })
    )
  }
  render() {
    return (
      <form className="col-md-6 col-md-offset-3 login" onSubmit={this.handleSubmit.bind(this)}>
        <h2>Log In</h2>
        <ErrorBox error={this.state.error}/>
        <input
          type="text"
          placeholder="Email"
          className="form-control login"
          ref={(ref) => this.getEmailText(ref)}
          onChange={(e) => this.onInputChange(e)}
        />
        <input
          type="password"
          placeholder="Password"
          className="form-control login"
          ref={(ref) => this.getPassText(ref)}
          onChange={(e) => this.onInputChange(e)}
        />
        <input className="btn btn-success" type="submit" value="Log In"/>
      </form>
    )
  }
}

LoginPage.contextTypes = {
  router: React.PropTypes.object
};

const mapStateToProps = (state) =>({
    error: state.user.error
});

export default connect(mapStateToProps, {
  userLogin
})(LoginPage);
