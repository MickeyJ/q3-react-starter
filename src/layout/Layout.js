import React, { Component } from 'react'
import JWT from '../helpers/jwt_helper'

import Navbar from './Navbar'

const { speechSynthesis } = window;

class Layout extends Component{
  constructor(){
    super();
    this.state = {
      selectedVoice: 'Daniel'
    }
  }
  handleLogout(){
    JWT.destroy();
    this.context.router.replace('/');
  }
  changeVoice(e){
    this.setState({ selectedVoice: e.target.value});
  }
  render(){
    return(
      <div>

        <section id="top-page">

          <Navbar
            token={JWT.fetch()}
            handleLogout={this.handleLogout.bind(this)}
          />

          <form className="form-inline voice-select-form" >
            <span>Select Voice</span>
            <select
              id="voice-select"
              className="form-control"
              onChange={this.changeVoice.bind(this)}
              value={this.state.selectedVoice} >

              {window.speechSynthesis.getVoices().map((voice, i) =>(
                <option key={i} >{voice.name}</option>
              ))}

            </select>
          </form>

        </section>


        <main>
          {React.cloneElement(this.props.children, {
            selectedVoice: this.state.selectedVoice
          })}
        </main>

      </div>
    )
  }
}

Layout.contextTypes = {
  router: React.PropTypes.object
};

export default Layout