import React, { Component } from 'react'

class AuthPage extends Component{
  render(){
    console.log(this.props);
    if(this.props.route.path === '/register'){
      return(
        <form>
          <input className="form-control" type="text" placeholder="Name"/>
          <input className="form-control" type="text" placeholder="Email"/>
          <input className="form-control" type="password" placeholder="Password"/>
          <input className="btn btn-success" type="submit" value="Sign Up"/>
        </form>
      )
    } else {
      return(
        <form>
          <input className="form-control" type="text" placeholder="Email"/>
          <input className="form-control" type="password" placeholder="Password"/>
          <input className="btn btn-success" type="submit" value="Login"/>
        </form>
      )
    }
  }
}

export default AuthPage
