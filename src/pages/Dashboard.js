import React, { Component } from 'react'
import { connect } from 'react-redux'
import JWT from '../helpers/jwt_helper'
import { 
  verifyUser, 
  getPhrases, 
  addPhrase, 
  deletePhrase 
} from '../redux/actions'

const { speechSynthesis } = window;

class Dashboard extends Component{
  constructor(){
    super();
    this.state = {
      selectedVoice: 'Daniel',
      textQueue: []
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
  setQueueState(newQueue){
    this.setState({ textQueue: newQueue });
  }
  changeVoice(e){
    this.setState({ selectedVoice: e.target.value});
  }
  render(){
    return (
      <div>

        {React.cloneElement(this.props.children, {
          user: this.props.user,
          phrases: this.props.phrases,
          addPhrase: this.props.addPhrase,
          deletePhrase: this.props.deletePhrase,
          selectedVoice: this.props.selectedVoice,
          setQueueState: this.setQueueState.bind(this),
          textQueue: this.state.textQueue
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
