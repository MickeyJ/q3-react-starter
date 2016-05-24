import React from 'react'

import IconLink from '../components/IconLink'
import SpeakBox from '../components/SpeakBox';


const HomePage = (props) => (
  <div>

    <IconLink pathTo={"/"} title={'Login'}/>
    <IconLink pathTo={"/register"} title={'Signup'}/>

    {props.children}

    <SpeakBox />
  </div>
);

export default HomePage
