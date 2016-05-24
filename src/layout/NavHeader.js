import React from 'react'
import { Link } from 'react-router'

const NavHeader = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <span> | </span>
      <Link to="/about">About</Link>
    </nav>
  )
};

export default NavHeader
