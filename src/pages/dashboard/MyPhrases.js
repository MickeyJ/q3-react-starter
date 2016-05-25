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
<<<<<<< HEAD

=======
>>>>>>> bdb936008e975bb479a18e5c3b5a194b487862cc
      </div>
    )
  }
}

export default MyPhrasesPage
