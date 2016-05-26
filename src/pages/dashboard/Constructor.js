import React, { Component } from 'react'

import { setVoice, sayMessage } from '../../helpers/say_message'

const { SpeechSynthesisUtterance, speechSynthesis } = window;

class ConstructorPage extends Component{
  constructor(){
    super();
    this.state = {
      textCue: ['Hello.']
    };
  }
  addToCue(input){
    this.cue = this.state.textCue;
    this.cue.push(input + ' ');
    this.setState({
      textCue: this.cue
    });
  }
  removeFromCue(text){
    this.cue = this.state.textCue.filter((x) =>(
      x !== text
    ));
    this.setState({
      textCue: this.cue
    })
  }
  sayIt(){
    const msg = new SpeechSynthesisUtterance();
    this.textToSpeak = '';
    this.state.textCue.map(x =>{
      this.textToSpeak += x + ' '
    });
    setVoice(msg, 'Samantha');
    sayMessage(msg, this.textToSpeak);
  }
  render(){
    return(
      <div>
        <h1 className="text-center">Speech Constructor</h1>
        <section id="text-cue-box">
          <article id="text-cue-input">
            {this.state.textCue.map((x, i) =>(
              <span onClick={() => this.removeFromCue(x)} key={i}>{x}</span>
            ))}
          </article>
          <button onClick={this.sayIt.bind(this)}>
            Say It
          </button>
        </section>

        <section id="word-box">
          <button onClick={() => this.addToCue('What is your name?')}>
            What is your name?
          </button>
          <button onClick={() => this.addToCue('My name is Bob.')}>
            My name is Bob.
          </button>
        </section>

      </div>
    )
  }
}

export default ConstructorPage
