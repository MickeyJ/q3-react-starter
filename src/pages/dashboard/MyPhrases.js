import React from 'react'

import { phrases, words }from '../../data/default'
import { setVoice, sayMessage } from '../../helpers/say_message';
import SpeakBox from '../../components/SpeakBox';

class MyPhrasesPage extends React.Component{
  render(){
    return(
      <div>
        <h1 className="text-center">My Phrases</h1>
        <div className="col-xs-6">
          {this.props.phrases.map((cat, catIdx) =>(
            <div>
              <h3 className="phrase-text" key={catIdx}>{cat.name}</h3>
              {this.props.phrases[0].phrases.map((phrase, phraseIdx) =>(
                <p className="phrase-text" key={phraseIdx}>{phrase.phrase}</p>
              ))}
            </div>
          ))}
        </div>

      </div>
    )
  }
}

export default MyPhrasesPage
