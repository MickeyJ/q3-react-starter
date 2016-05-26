import React from 'react'

import { phrases, words }from '../../data/default'
import { setVoice, sayMessage } from '../../helpers/say_message';
import SpeakBox from '../../components/SpeakBox';

class MyPhrasesPage extends React.Component{
  sayIt(e, text){
    e.persist();
    const msg = new window.SpeechSynthesisUtterance();
    setVoice(msg, 'Bad News');
    sayMessage(msg, text);
  }

  getUserId(ref){
    this.id = ref
  }
  getPhraseText(ref){
    this.phrase = ref
  }
  onInputChange(e){
    // console.log(this.email.value);
  }
  handleSubmit(e){
    e.preventDefault();
    let user_id = this.id.value,
        phrase = this.phrase.value
    if(!user_id || !phrase) {
      this.setState({
        error: 'yo shit fucked'
      });
      return false;
    }
    return (
        this.props.phrasePush({user_id, phrase})
            .then(res =>{
              if(res.payload.data){
                console.log(res.payload.data)
              } else {
                this.setState({
                  error: res.payload.data.error
                });
              }
            })
    )
  }
  render(){
    return(
      <div>
        <h1 className="text-center">My Phrases</h1>
        <form className="col-md-6 col-md-offset-3 auth-form" onSubmit={this.handleSubmit.bind(this)}>
          <h2>Add Up</h2>
          <ErrorBox error={this.state.error}/>
          <input
              type="hidden"
              className="form-control register"
              value={JWT.fetch()}
              ref={(ref) => this.getUserId(ref)}
          />
          <input
              type="text"
              placeholder="phrase it"
              className="form-control register"
              ref={(ref) => this.getPhraseText(ref)}
              onChange={(e) => this.onInputChange(e)}
          />
          <button className="btn btn-success" type="submit">Sign Up</button>
        </form>
      </div>
    )
  }
}

export default MyPhrasesPage
