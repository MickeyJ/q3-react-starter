import React from 'react'

import IconLink from '../components/IconLink'
import SpeakBox from '../components/SpeakBox';

const Dashboard = (props) => (
  <div>
    <IconLink pathTo={"/profile"} title={"My Profile"} color={"rgb(134, 145, 198)"}/>
    <IconLink pathTo={"/quick"} title={"QuickSpeech"} color={"rgba(131, 222, 224, 0.74)"}/>
    <IconLink pathTo={"/phrases"} title={"My Phrases"} color={"rgba(219, 144, 148, 0.84)"}/>
    <IconLink pathTo={"/constructor"} title={"Constructor"} color={"rgba(240, 186, 141, 0.95)"}/>
    <SpeakBox />
  </div>
);

export default Dashboard
