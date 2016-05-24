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
      <div>
        <div>
          <h3>Words</h3>
          {words.map((x, i) =>(
            <button key={i} onClick={() => this.sayIt(x)}>{x}</button>
          ))}
        </div>
        <div>
          <h3>Phrases</h3>
          {phrases.map((x, i) =>(
            <button key={i} onClick={() => this.sayIt(x)}>{x}</button>
          ))}
        </div>
      </div>
    )
  }
}
