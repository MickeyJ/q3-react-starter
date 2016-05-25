import React from 'react'

import { Link } from 'react-router'

const IconLink = (props) => (
  <Link className="col-xs-3 icon-link" style={{backgroundColor: props.color}} to={props.pathTo}>
    <h2>{props.title}</h2>
    <span className={props.icon}></span>
  </Link>
);
export default IconLink
