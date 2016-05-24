import React, { Component } from 'react'

import sayMessage from '../helpers/say_message'

class SpeakBox extends Component {
  getInputText(ref){
    this.message = ref
  }
  sayIt(e){
    e.preventDefault();
    sayMessage(this.message.value, 'Fred');
    this.message.value = null;
  }
  render(){
    return(
      <div>
        <form onSubmit={this.sayIt.bind(this)}>
          <input
            type="text"
            placeholder="What to say?"
            ref={(ref) => this.getInputText(ref)}
          />
          <button type="submit">Say It</button>
        </form>
      </div>
    )
  }
}

export default SpeakBox
