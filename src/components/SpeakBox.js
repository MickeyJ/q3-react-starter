import React, { Component } from 'react'

class SpeakBox extends Component {
  getInputText(ref){
    this.message = ref
  }
  sayIt(e){
    e.preventDefault();
    const msg = new SpeechSynthesisUtterance(this.message.value);
    window.speechSynthesis.speak(msg);
    this.message.value = null;
  }
  render(){
    return(
      <div>
        <form onSubmit={(e) => this.sayIt(e)}>
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

