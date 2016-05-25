import React, { Component } from 'react'

import {setVoice, sayMessage} from '../helpers/say_message'

const { SpeechSynthesisUtterance, speechSynthesis } = window;

const voices = speechSynthesis.getVoices();

class SpeakBox extends Component {
  getInputText(ref){
    this.message = ref
  }
  sayIt(e){
    e.preventDefault();
    const msg = new SpeechSynthesisUtterance();

    setVoice(msg, 'Zarvox');
    sayMessage(msg, this.message.value);
    this.message.value = null;
  }
  render(){
    return (
      <div>
        {voices.map((x, i) =>{
          console.log(x);
        })}
        <form className="form-inline" onSubmit={this.sayIt.bind(this)}>
          <input
            type="text"
            className="form-control speak-input"
            placeholder="What to say?"
            ref={(ref) => this.getInputText(ref)}
          />
          <input
            type="submit"
            value="Say It"
            onClick={this.sayIt.bind(this)}
            className="btn btn-info"
           />
        </form>
      </div>
    )
  }
}

export default SpeakBox
