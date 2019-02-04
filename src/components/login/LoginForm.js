import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    errors: '',
    isLoading: false
  }
  onSubmit = e => {
    e.preventDefault();
    this.setState({
      errors: '',
      isLoading: true
    })
    this.props.userLoginRequest(this.state)
      .then(res => {
        this.props.addFlashMessage({
          type: 'success',
          text: 'You Login up successfully. Welcome back!'
        })
        this.props.history.push('/')
      })
      .catch(err => {        
        this.setState({
          errors: err.response.data.error,
          isLoading: false
        })
      })
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
        { this.state.errors && <div className="alert alert-danger">{this.state.errors}</div>}
        <div className="form-group">
          <label className="control-label">Username / Email</label>
          <input 
            type="text" 
            name="email" 
            className="form-control" 
            onChange={this.onChange} 
            value={this.state.email}/>
        </div>
        <div className="form-group">
          <label className="control-label">Password</label>
          <input 
            type="password" 
            name="password" 
            value={this.state.password}
            className="form-control" 
            onChange={this.onChange} 
            />
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-lg" disabled={this.state.isLoading}>Login</button>
        </div>
      </form>
    )
  }
}

LoginForm.propTypes = {
  userLoginRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired

}

export default withRouter(LoginForm);