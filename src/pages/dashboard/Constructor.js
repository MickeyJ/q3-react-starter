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
  setCueState(input){
    this.setState({ textCue: input });
  }
  pushToCue(input){
    this.cue.push(input + ' ');
    this.setCueState(this.cue);
  }
  addToCue(e, input){
    e.preventDefault();
    this.cue = this.state.textCue;
    if(e.type === "submit"){
      if(!this.inputText.value) return false;
      else {
        this.pushToCue(input);
        this.inputText.value = null
      }
    } 
    else 
      this.pushToCue(input);
  }
  removeFromCue(index){
    this.cue = this.state.textCue;
    this.cue = this.cue.filter((x, i) =>i !== index);
    this.setCueState(this.cue);
  }
  sayCue(){
    const msg = new SpeechSynthesisUtterance();
    this.textToSpeak = '';
    this.state.textCue.map(text =>{
      this.textToSpeak += text + ' '
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
              <span
                key={i}
                onClick={() => this.removeFromCue(i)}
                className="btn btn-primary word-to-cue" >
                {x}
              </span>
            ))}
          </article>

          <button
            id="say-cue-btn"
            className="btn btn-success"
            onClick={this.sayCue.bind(this)}>
            Say It
          </button>
          <button
            id="clear-cue-btn"
            className="btn btn-warning"
            onClick={() => this.setCueState([])}>
            Clear Cue
          </button>

        </section>

        <section id="word-box">
          <div className='col-xs-6'>
            <h3 className='text-center'>Words / Phrases</h3>
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

        <div className='col-xs-6'>
          <h3 className='text-center'>Categories?</h3>
          <form className="form-inline add-text-form" onSubmit={(e) =>this.addToCue(e, this.inputText.value)}>
            <input
              type="text"
              className="form-control speak-input"
              placeholder="Type Here"
              ref={(ref) => this.getInputText(ref)}
            />
            <button
              type="submit"
              className="btn btn-info">
              Add To Cue
            </button>
          </form>
        </div>


      </div>
    )
  }
}

export default ConstructorPage
