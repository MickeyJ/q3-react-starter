import React from 'react'

import { phrases, words }from '../data/default'
import {setVoice, sayMessage} from '../helpers/say_message';

export default class QuickSpeechPage extends React.Component{
  sayIt(text){
    const msg = new window.SpeechSynthesisUtterance();
    setVoice(msg, 'Lee');
    sayMessage(msg, text);
  }
  render(){
    return(
      <div className='quick-speech'>
        <div className='col-xs-6'>
          <h3 className='text-center'>Words</h3>
          {words.map((x, i) =>(
            <span className='btn quick-speech-button' key={i} onClick={() => this.sayIt(x)}>{x}</span>
          ))}
        </div>
        <div className='col-xs-6'>
          <h3 className='text-center'>Phrases</h3>
          {phrases.map((x, i) =>(
            <span className='btn quick-speech-button' key={i} onClick={() => this.sayIt(x)}>{x}</span>
          ))}
        </div>
      </div>
    )
  }
}
