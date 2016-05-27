import React from 'react'

import { phrases, words }from '../../data/default'
import { setVoice, sayMessage } from '../../helpers/say_message';

import SpeakBox from '../../components/SpeakBox';

class QuickSpeechPage extends React.Component{
  sayIt(e, text){
    e.persist();
    const msg = new window.SpeechSynthesisUtterance();
    setVoice(msg, this.props.selectedVoice);
    sayMessage(msg, text);
  }
  render(){
    return(
      <div>
        <h2 className="phrases">Quick Speech</h2>
        <SpeakBox selectedVoice={this.props.selectedVoice}/>
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
      </div>
    )
  }
}

export default QuickSpeechPage
