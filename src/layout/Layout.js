import React from 'react'
import { Link } from 'react-router'

import JWT from '../helpers/jwt_helper'

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
    <span> | </span>
    <Link to="/dashboard">Dashboard</Link>
    <span> | </span>
    <Link to="/" onClick={JWT.destroy()}>Logout</Link>

    <main>
      {props.children}
    </main>

  </div>
);

export default Layout
