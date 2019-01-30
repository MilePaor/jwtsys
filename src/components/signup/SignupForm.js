import React, { Component } from 'react';
import PropTypes from 'prop-types'

class SignupForm extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  submitForm = e => {
    e.preventDefault();
    this.props.userSingupRequest(this.state)
    
  }
  render() {
    return (
      <form onSubmit={this.submitForm}>
        <h1>Join our community!</h1>
        <div className="form-group">
          <label className="control-label">Username</label>
          <input type="text" name="username" className="form-control" onChange={this.onChange} value={this.state.username}/>
        </div>
        <div className="form-group">
          <label className="control-label">Email</label>
          <input type="text" name="email" className="form-control" onChange={this.onChange} value={this.state.email}/>
        </div>
        <div className="form-group">
          <label className="control-label">Password</label>
          <input type="password" name="password" className="form-control" onChange={this.onChange} value={this.state.password}/>
        </div>
        <div className="form-group">
          <label className="control-label">Confirm password</label>
          <input type="password" name="passwordConfirmation" className="form-control" onChange={this.onChange} value={this.state.passwordConfirmation}/>
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div>
      </form>
    )
  }
}

SignupForm.propTypes = {
  userSingupRequest: PropTypes.func.isRequired
}
export default SignupForm;