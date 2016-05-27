import React, { Component } from 'react'

import { setVoice, sayMessage } from '../../helpers/say_message'

import TextQueueBox from '../../components/TextQueueBox'
import WordPhraseBox from '../../components/WordPhraseBox'
import InputToQueue from '../../components/InputToQueue'

const { SpeechSynthesisUtterance } = window;

class ConstructorPage extends Component{
  constructor(){
    super();
    this.state = {
      textQueue: ['Hey. ', `What's good? `]
    };
  }
  getInputText(ref){
    this.inputText = ref
  }
  setQueueState(input){
    this.setState({ textQueue: input });
  }
  pushToQueue(input){
    this.Queue.push(input + ' ');
    this.setQueueState(this.Queue);
  }
  addToQueue(e, input){
    e.preventDefault();
    this.Queue = this.state.textQueue;
    if(e.type === "submit"){
      if(!this.inputText.value) return false;
      else {
        this.pushToQueue(input);
        this.inputText.value = null
      }
    }
    else
      this.pushToQueue(input);
  }
  removeFromQueue(index){
    this.Queue = this.state.textQueue;
    this.Queue = this.Queue.filter((x, i) => i !== index);
    this.setQueueState(this.Queue);
  }
  sayQueue(){
    const msg = new SpeechSynthesisUtterance();
    this.textToSpeak = '';
    this.state.textQueue.map(text =>{
      this.textToSpeak += (text + ' ')
    });
    setVoice(msg, this.props.selectedVoice);
    sayMessage(msg, this.textToSpeak);
  }
  render(){
    return(
      <div>
        <h1 className="text-center">Speech Constructor</h1>

        <TextQueueBox
          textQueue={this.state.textQueue}
          removeFromQueue={this.removeFromQueue.bind(this)}
          sayQueue={this.sayQueue.bind(this)}
          setQueueState={this.setQueueState.bind(this)}
        />

        <InputToQueue
          addToQueue={this.addToQueue.bind(this)}
          getInputText={this.getInputText.bind(this)}
          inputText={this.inputText}
        />

        <WordPhraseBox
          myPhrases={this.props.phrases}
          addToQueue={this.addToQueue.bind(this)}
        />

      </div>
    )
  }
}

export default ConstructorPage
