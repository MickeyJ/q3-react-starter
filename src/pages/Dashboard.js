import React, { Component } from 'react'
import { connect } from 'react-redux'
import { verifyUser, getPhrases, addPhrase, deletePhrase } from '../redux/actions'

import JWT from '../helpers/jwt_helper'
const { speechSynthesis } = window;

class Dashboard extends Component{
  constructor(){
    super();
    this.state = {
      selectedVoice: 'Daniel'
    }
  }
  componentWillMount(){
    if(!JWT.fetch()){
      this.context.router.replace('/');
    } else {
      return this.props.verifyUser().then(res =>{
        if(this.props.error === 'invalid token'){
          JWT.destroy();
          this.context.router.replace('/');
        } else {
          this.props.getPhrases().then(res =>{
            console.log(res);
          });
        }
      })
    }
  }
  changeVoice(e){
    this.setState({ selectedVoice: e.target.value});
  }
  render(){
    return (
      <div>
        <fieldset className="form-inline">
          <label htmlFor="voice-select" >Select Voice</label>
            <select id="voice-select" className="form-control" onChange={this.changeVoice.bind(this)} value={this.state.selectedVoice} >
              {window.speechSynthesis.getVoices().map((voice, i) =>(
                <option key={i}>{voice.name}</option>
              ))}
            </select>
        </fieldset>

        {React.cloneElement(this.props.children, {
          user: this.props.user,
          selectedVoice: this.state.selectedVoice,
          phrases: this.props.phrases,
          addPhrase: this.props.addPhrase,
          deletePhrase: this.props.deletePhrase
        })}
      </div>
    )
    };

}

Dashboard.contextTypes = {
  router: React.PropTypes.object
};

function mapStateToProps(state) {
  return {
    user: state.user.cred,
    error: state.user.error,
    phrases: state.phrases.phrases
  }
}

export default connect(mapStateToProps, {
  verifyUser,
  getPhrases,
  addPhrase,
  deletePhrase
})(Dashboard);
