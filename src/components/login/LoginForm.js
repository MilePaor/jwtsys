import React, { Component } from 'react';

class LoginForm extends Component {
  state = {
    identifier: '',
    password: '',
    errors: {},
    isLoading: false
  }
  onSubmit = e => {
    e.preventDefault();
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render(){
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Login</h1>
        <div className="form-group">
          <label className="control-label">Username / Email</label>
          <input 
            type="text" 
            name="identifier" 
            className="form-control" 
            onChange={this.onChange} 
            value={this.state.identifier}/>
        </div>
        <div className="form-group">
          <label className="control-label">Password</label>
          <input 
            type="password" 
            name="password" 
            className="form-control" 
            onChange={this.onChange} 
            value={this.state.password}/>
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-lg" disabled={this.state.isLoading}>Login</button>
        </div>
      </form>
    )
  }
}

export default LoginForm;