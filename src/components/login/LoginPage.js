import React, { Component } from 'react';
import { login } from '../../actions/authActions';
import { addFlashMessage } from '../../actions/flashMessages' 
import PropTypes from 'prop-types';
import { connect } from 'react-redux';



import LoginForm from './LoginForm';

class LoginPage extends Component {
  render(){
    return (
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <LoginForm 
            userLoginRequest={this.props.login} 
            addFlashMessage={this.props.addFlashMessage}/>
        </div>
      </div>
    )
  }
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
}

export default connect(null, { login, addFlashMessage })(LoginPage);