import React from 'react'
import { Link } from 'react-router'

const Layout = (props) => (
  <div className="container-fluid">

    <Link to="/">Home</Link>
    <span> | </span>
    <Link to="/about">About</Link>
    <span> | </span>
    <Link to='/register'>Sign Up</Link>
    <span> | </span>
    <Link to='/login'>Log In</Link>
    <span> | </span>
    <Link to="/quick">Quick Speak</Link>

    <main>
      {props.children}
    </main>

  </div>
);

export default Layout
