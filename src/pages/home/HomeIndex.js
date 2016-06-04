import React from 'react'

import SpeakBox from '../../components/SpeakBox';

const HomeIndex = (props) =>(
  <div className="homeIndex">
    <h1 className="homeIndex">Welcome to EasySpeak</h1>
    <SpeakBox selectedVoice={props.selectedVoice}/>
  </div>
);

export default HomeIndex
