import React from 'react'
import { Link } from 'react-router'

import NavLink from './../components/NavLink'

const Navbar = (props) => {
  if(!props.token){
    return(
      <nav>
        <NavLink to="/">
          <span>Home</span>
        </NavLink>
        <i> | </i>
        <NavLink to="/about">
          <span>About</span>
        </NavLink>
        <i> | </i>
        <NavLink to="/register">
          <span>Signup</span>
        </NavLink>
        <i> | </i>
        <NavLink to="/login">
          <span>Login</span>
        </NavLink>
      </nav>
    )
  } else {
    return (
      <nav>
        <NavLink to="/dashboard">
          <span>Dashboard</span>
        </NavLink>
        <i> | </i>
        <NavLink to="/profile">
          <span>Profile</span>
        </NavLink>
        <i> | </i>
        <NavLink to="/phrases">
          <span>My Phrases</span>
        </NavLink>
        <i> | </i>
        <NavLink to="/quick">
          <span>Quick Speech</span>
        </NavLink>
        <i> | </i>
        <NavLink to="/constructor">
          <span>Speech Constructor</span>
        </NavLink>
        <i> | </i>
        <Link to="/" onClick={props.handleLogout.bind(this)}>Logout</Link>
      </nav>
    )
  }
};

export default Navbar
