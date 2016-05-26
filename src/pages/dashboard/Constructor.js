import React, { Component } from 'react'

import { setVoice, sayMessage } from '../../helpers/say_message'


const { SpeechSynthesisUtterance, speechSynthesis } = window;

import TextCueBox from '../../components/TextCueBox'
import WordPhraseBox from '../../components/WordPhraseBox'
import InputToCue from '../../components/InputToCue'

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
      this.textToSpeak += (text + ' ')
    });
    setVoice(msg, 'Samantha');
    sayMessage(msg, this.textToSpeak);
  }
  render(){
    return(
      <div>
        <h1 className="text-center">Speech Constructor</h1>

        <TextCueBox
          textCue={this.state.textCue}
          removeFromCue={this.removeFromCue.bind(this)}
          sayCue={this.sayCue.bind(this)}
          setCueState={this.setCueState.bind(this)}
        />

        <WordPhraseBox
          addToCue={this.addToCue.bind(this)}
        />

        <InputToCue
          addToCue={this.addToCue.bind(this)}
          getInputText={this.getInputText.bind(this)}
          inputText={this.inputText}
        />
        
      </div>
    )
  }
}

export default ConstructorPage
