import React, { Component } from 'react'
import JWT from '../../helpers/jwt_helper.js'
import { connect } from 'react-redux'
import { userLogin } from '../../redux/actions'
import { setVoice, sayMessage } from '../../helpers/say_message'


import ErrorBox from '../../components/ErrorBox'

const { SpeechSynthesisUtterance, speechSynthesis } = window;

class LoginPage extends Component{
  constructor(){
    super();
    this.state ={ error: false };
  }
  getEmailText(ref){
    this.email = ref;
  }
  getPassText(ref){
    this.password = ref
  }
  handleSubmit(e){
    e.preventDefault();
    let email = this.email.value,
        password = this.password.value;
    if (!password || !email) {
      const msg = new SpeechSynthesisUtterance();
      setVoice(msg, 'Samantha');
      sayMessage(msg, 'Both fields are required.');
      this.setState({
        error: 'Both fields are required.'
      });
      return false
    }
    return(
      this.props.userLogin({email, password})
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
  render() {
    return (
      <form className="col-md-6 col-md-offset-3 auth-form" onSubmit={this.handleSubmit.bind(this)}>
        <h2>Log In</h2>
        <ErrorBox error={this.state.error}/>
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
        <button className="btn btn-success" type="submit">Log In</button>
      </form>
    )
  }
}

LoginPage.contextTypes = {
  router: React.PropTypes.object
};

const mapStateToProps = (state) =>({
    user: state.user.cred
});

export default connect(mapStateToProps, {
  userLogin
})(LoginPage);
