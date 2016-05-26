import React, { Component } from 'react'

import { setVoice, sayMessage } from '../../helpers/say_message'
import { phrases, words }from '../../data/default'

const { SpeechSynthesisUtterance, speechSynthesis } = window;

class ConstructorPage extends Component{
  constructor(){
    super();
    this.state = {
      textCue: ['Hello. ']
    };
  }
  getInputText(ref){
    this.inputText = ref
  }
  addToCue(e, input){
    e.preventDefault();
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
              <span className="btn btn-primary word-to-cue" onClick={() => this.removeFromCue(x)} key={i}>{x}</span>
            ))}
          </article>
          <button onClick={this.sayIt.bind(this)}>
            Say It
          </button>
        </section>

        <section id="word-box">
          <div className='col-xs-6'>
            <h3 className='text-center'>Words</h3>
            {phrases.map((x, i) =>(
              <span
                key={i}
                onClick={(e) => this.addToCue(e, x)}
                className='btn btn-primary word-to-cue'>
              {x}
            </span>
            ))}
          </div>
        </section>

        <form className="form-inline" onSubmit={(e) =>this.addToCue(e, this.inputText.value)}>
          <input
            type="text"
            defaultValue="Hello"
            className="form-control speak-input"
            placeholder="What else to say?"
            ref={(ref) => this.getInputText(ref)}
          />
          <button
            type="submit"
            className="btn btn-info"
            onClick={(e) =>this.addToCue(e, this.inputText.value)}
          >Add To Cue</button>
        </form>

      </div>
    )
  }
}

export default ConstructorPage
