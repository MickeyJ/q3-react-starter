import React from 'react'

import { phrases, words }from '../data/default'
import { setVoice, sayMessage } from '../helpers/say_message';

class QuickSpeechPage extends React.Component{
  sayIt(e, text){
    e.persist();
    console.log(e);
    const msg = new window.SpeechSynthesisUtterance();
    setVoice(msg, 'Carlos');
    sayMessage(msg, text);
  }
  render(){
    return(
      <div className='quick-speech'>
        
        <div className='col-xs-6'>
          <h3 className='text-center'>Words</h3>
          {words.map((x, i) =>(
            <span 
              key={i} 
              onClick={(e) => this.sayIt(e, x)}
              className='btn quick-speech-button'>
              {x}
            </span>
          ))}
        </div>
        
        <div className='col-xs-6'>
          <h3 className='text-center'>Phrases</h3>
          {phrases.map((x, i) =>(
            <span 
              key={i} 
              onClick={(e) => this.sayIt(e, x)}
              className='btn quick-speech-button'>
              {x}
            </span>
          ))}
        </div>
        
      </div>
    )
  }
}

export default QuickSpeechPage
