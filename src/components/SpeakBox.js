import React, { Component } from 'react'

import sayMessage from '../helpers/say_message'

class SpeakBox extends Component {
  getInputText(ref){
    this.message = ref
  }
  sayIt(e){
    e.preventDefault();
    sayMessage(this.message.value, 'Carlos');
    this.message.value = null;
  }
  render(){
    return(
      <div>
        <form className="form-inline" onSubmit={this.sayIt.bind(this)}>
          <input
            type="text"
            className="form-control"
            placeholder="What to say?"
            ref={(ref) => this.getInputText(ref)}
          />
          <button className="btn btn-info" type="submit">Say It</button>
        </form>
      </div>
    )
  }
}

export default SpeakBox
