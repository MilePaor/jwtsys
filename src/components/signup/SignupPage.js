import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { }

import SignupForm from './SignupForm';

class SignupPage extends React.Component {
  

  render(){
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <SignupForm userSignupRequest={this.props.userSignupRequest}/>
        </div>
      </div>
    )
  }
}

SignupPage.propTypes = {
  userSingupRequest: PropTypes.func.isRequired
}

export default connect((state) => { return {} }, { userSignupRequest })(SignupPage);