import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import NavigationBar from './components/navigation/NavigationBar';
import App from './components/app/App';
import SignUpPage from './components/signup/SignupPage';
import FlashMessages from './components/flash/FlashMessagesList';

const GlobalRouter = props => {
  return (
      <BrowserRouter>
        <div className="container">
          <NavigationBar />
          <FlashMessages />
          <Route exact path="/" component={App} />
          <Route path="/signup" component={SignUpPage} />  
        </div>
      </BrowserRouter>
  )
}

export default GlobalRouter;