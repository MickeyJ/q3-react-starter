import React from 'react'

const ErrorBox = props => {
  if(props.error){
    return <span style={{color: 'red'}}>{props.error}</span>
  } else {
    return <span> </span>;
  }
};
export default ErrorBox