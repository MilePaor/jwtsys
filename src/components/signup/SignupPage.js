import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userSignupRequest, isUserExists } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessages' 

import SignupForm from './SignupForm';

class SignupPage extends React.Component {
  render(){
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <SignupForm 
            userSignupRequest={this.props.userSignupRequest} 
            addFlashMessage={this.props.addFlashMessage} 
            isUserExists={this.props.isUserExists}/>
        </div>
      </div>
    )
  }
}
 
SignupPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  isUserExists: PropTypes.func.isRequired

}

export default connect(null, { userSignupRequest, addFlashMessage, isUserExists })(SignupPage);