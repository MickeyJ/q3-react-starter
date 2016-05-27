import React from 'react'

import IconLink from '../../components/IconLink'
import SpeakBox from '../../components/SpeakBox';

const DashIndex = (props) => (
  <div id="dashboard">

    <SpeakBox selectedVoice={props.selectedVoice}/>
    
    <div className="col-xs-8 col-xs-offset-2 dash-box">

      <IconLink
      pathTo={"/quick"}
      title={"QuickSpeech"}
      color={"rgba(131, 222, 224, 0.74)"}
      icon={"glyphicon glyphicon-volume-up center-block"}
      />
      <IconLink
      pathTo={"/phrases"}
      title={"My Phrases"}
      color={"rgba(219, 144, 148, 0.84)"}
      icon={"glyphicon glyphicon-list-alt center-block"}
      />
      <IconLink
      pathTo={"/constructor"}
      title={"Constructor"}
      color={"rgba(240, 186, 141, 0.95)"}
      icon={"glyphicon glyphicon-cog center-block"}
      />

    </div>


  </div>
);

export default DashIndex
