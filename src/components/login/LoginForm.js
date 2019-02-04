import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/loginActions';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { addFlashMessage } from '../../actions/flashMessages' 




class LoginForm extends Component {
  state = {
    identifier: '',
    password: '',
    errors: {},
    isLoading: false
  }
  onSubmit = e => {
    e.preventDefault();
    this.setState({
      errors: {},
      isLoading: true
    })
    this.props.login(this.state)
      .then(res => {
        this.props.addFlashMessage({
          type: 'success',
          text: 'You Login up successfully. Welcome back!'
        })
        this.props.history.push('/')
      })
      .catch(err => this.setState({
        errors: 'Error',
        isLoading: false
      }))
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
  login: PropTypes.func.isRequired
}

export default withRouter(connect(null, { login, addFlashMessage })(LoginForm));