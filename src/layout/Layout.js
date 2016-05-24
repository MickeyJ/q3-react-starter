import React from 'react'
import { Link } from 'react-router'

const Layout = (props) => (
  <div className="container-fluid">

    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    
    <main>
      {props.children}
    </main>
    
  </div>
);

export default Layout
