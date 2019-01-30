import React from 'react';
import SignupForm from './SignupForm';

class SignupPage extends React.Component {
  

  render(){
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <SignupForm />
        </div>
      </div>
    )
  }
}

export default SignupPage;