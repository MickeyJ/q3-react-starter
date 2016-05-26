import React from 'react'

import { phrases, words }from '../../data/default'
import { setVoice, sayMessage } from '../../helpers/say_message';
import SpeakBox from '../../components/SpeakBox';

class MyPhrasesPage extends React.Component{
  sayIt(e, text){
    e.persist();
    const msg = new window.SpeechSynthesisUtterance();
    setVoice(msg, 'Alex');
    sayMessage(msg, text);
  }
  render(){
    return(
      <div>
        <h1 className="text-center">My Phrases</h1>
        <div className="col-xs-6">
          {this.props.phrases.map((x, i) =>(
            <div>
              <h3 className="phrase-text" key={i}>{x.name}</h3>
              {this.props.phrases[0].phrases.map((x, i) =>(
                <p className="phrase-text" key={i}>{x.phrase}</p>
              ))}
            </div>
          ))}
        </div>

      </div>
    )
  }
}

export default MyPhrasesPage
