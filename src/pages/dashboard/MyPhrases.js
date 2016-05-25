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
      </div>
    )
  }
}

export default MyPhrasesPage
