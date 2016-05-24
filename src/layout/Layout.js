import React from 'react'

import NavHeader from './NavHeader'

const Layout = (props) => (
  <div>
    <NavHeader />
    {props.children}
  </div>
);

export default Layout
