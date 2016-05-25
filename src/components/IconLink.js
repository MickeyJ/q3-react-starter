import React from 'react'

import { Link } from 'react-router'

const IconLink = (props) => (
  <Link className="col-xs-3 icon-link" to={props.pathTo}>
    <h2>{props.title}</h2>
  </Link>
);
export default IconLink
