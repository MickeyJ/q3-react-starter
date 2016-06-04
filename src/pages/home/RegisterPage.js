import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userRegister } from '../../redux/actions'

import JWT from '../../helpers/jwt_helper.js'
import { setVoice, sayMessage } from '../../helpers/say_message'
import ErrorBox from '../../components/ErrorBox'

const { SpeechSynthesisUtterance, speechSynthesis } = window;

class RegisterPage extends Component{
  constructor(){
    super();
    this.state ={ error: false };
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
  handleSubmit(e){
    e.preventDefault();
    let name = this.name.value,
        email = this.email.value,
        password = this.password.value;
    if(!password || !email || !name) {
      const msg = new SpeechSynthesisUtterance();
      setVoice(msg, 'Samantha');
      sayMessage(msg, 'All fields are required.');
      this.setState({
        error: 'All fields are required'
      });
      return false;
    }
    return(
      this.props.userRegister({name, email, password})
        .then(res =>{
          if(res.payload.data.user){
            JWT.save(res.payload.data);
            this.context.router.replace('/dashboard');
          } else {
            const msg = new SpeechSynthesisUtterance();
            setVoice(msg, 'Samantha');
            sayMessage(msg, res.payload.data.error);
            this.setState({
              error: res.payload.data.error
            });
          }
        })
    )
  }
  render(){
    return(
      <form className="col-md-6 col-md-offset-3 auth-form" onSubmit={this.handleSubmit.bind(this)}>
        <h2>Sign Up</h2>
        <ErrorBox error={this.state.error}/>
        <input
          type="text"
          placeholder="Name"
          className="form-control register"
          ref={(ref) => this.getNameText(ref)}
        />
        <input
          type="text"
          placeholder="Email"
          className="form-control register"
          ref={(ref) => this.getEmailText(ref)}
        />
        <input
          type="password"
          placeholder="Password"
          className="form-control"
          ref={(ref) => this.getPassText(ref)}
        />
        <button className="btn btn-success" type="submit">Sign Up</button>
      </form>
    )
  }
}

RegisterPage.contextTypes = {
  router: React.PropTypes.object
};

const mapStateToProps = (state) =>({
  user: state.user.cred
});

export default connect(mapStateToProps, {
  userRegister
})(RegisterPage);
