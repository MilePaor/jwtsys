import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class SignupForm extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',

  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  checkUserExists = e => {
    // ovde odradis post ka serveru da vidis da li user ili password postoji
    // const field = e.target.name;
    const value = e.target.value;

    if(value !== '') {
      console.log('nesto');
      
      this.props.isUserExists(value)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    return 
  }

  submitForm = e => {
    e.preventDefault();
    this.props.userSignupRequest(this.state)
      .then(() => {
        this.props.addFlashMessage({
          type: 'success',
          text: 'You signed up successfully. Welcome!'
        })
        this.props.history.push('/')
      })
      .catch(err => console.log(err))  
  }



  render() {
    return (
      <form onSubmit={this.submitForm}>
        <h1>Join our community!</h1>
        <div className="form-group">
          <label className="control-label">Username</label>
          <input onBlur={this.checkUserExists} type="text" name="username" className="form-control" onChange={this.onChange} value={this.state.username}/>
        </div>
        <div className="form-group">
          <label className="control-label">Email</label>
          <input onBlur={this.checkUserExists} type="text" name="email" className="form-control" onChange={this.onChange} value={this.state.email}/>
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
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  checkUserExists: PropTypes.func,
  isUserExists: PropTypes.func.isRequired
}

export default withRouter(SignupForm);