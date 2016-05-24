import React from 'react'

import IconLink from './IconLink'

const Layout = (props) => (
  <div className="container-fluid">
    
    <IconLink pathTo={"/"} title={'Home'}/>
    <IconLink pathTo={"/about"} title={'About'}/>
    
    <main>
      {props.children}
    </main>
    
  </div>
);

export default Layout
