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
      textQueue: []
    };
  }
  getInputText(ref){
    this.inputText = ref
  }
  pushToQueue(input){
    this.Queue.push(input + ' ');
    this.props.setQueueState(this.Queue);
  }
  addToQueue(e, input){
    e.preventDefault();
    this.Queue = this.props.textQueue;
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
  removeFromQueue(queueIdx){
    this.Queue = this.props.textQueue;
    this.Queue = this.Queue.filter((x, idx) => idx !== queueIdx);
    this.props.setQueueState(this.Queue);
  }
  sayQueue(){
    const msg = new SpeechSynthesisUtterance();
    this.textToSpeak = '';
    this.props.textQueue.map(text => {
      this.textToSpeak += (text + ' ')
    });
    setVoice(msg, this.props.selectedVoice);
    sayMessage(msg, this.textToSpeak);
  }
  render() {
    return(
      <div>

        <TextQueueBox
          textQueue={this.props.textQueue}
          removeFromQueue={this.removeFromQueue.bind(this)}
          sayQueue={this.sayQueue.bind(this)}
          setQueueState={this.props.setQueueState.bind(this)}
        />

        <div className='col-xs-12 text-center'>
          <form
            className="form-inline add-text-form"
            onSubmit={(e) => this.addToQueue(e, this.inputText.value)}>
            <input
              type="text"
              className="form-control speak-input"
              placeholder="Type Here"
              ref={(ref) => this.getInputText(ref)}
            />
            <button
              type="submit"
              className="btn btn-info">
              Add To Queue
            </button>
          </form>
        </div>


        <WordPhraseBox
          myPhrases={this.props.phrases}
          addToQueue={this.addToQueue.bind(this)}
        />

      </div>
    )
  }
}

export default ConstructorPage
