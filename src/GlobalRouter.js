import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import App from './components/App';
import SignUpPage from './components/signup/SignupPage';

const GlobalRouter = props => {
  return (
      <BrowserRouter>
        <div className="container">
          <NavigationBar />
          <Route exact path="/" component={App} />
          <Route path="/signup" component={SignUpPage} />  
        </div>
      </BrowserRouter>
  )
}

export default GlobalRouter;