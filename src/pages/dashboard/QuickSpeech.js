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
    const myPhrases = this.props.phrases.map(x => x.phrase);
    const allPhrases = myPhrases.concat(phrases)
    return(
      <div>
        <SpeakBox selectedVoice={this.props.selectedVoice}/>
        <div className='quick-speech'>
          <div className='col-xs-6 quick-speech-col'>
            {words.map((x, i) =>(
              <span
                key={i}
                onClick={(e) => this.sayIt(e, x)}
                className='btn quick-speech-button'>
                {x}
              </span>
            ))}
          </div>

          <div className='col-xs-6 quick-speech-col'>
            {allPhrases.map((x, i) =>(
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
