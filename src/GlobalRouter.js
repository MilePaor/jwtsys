import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import NavigationBar from './components/navigation/NavigationBar';
import App from './components/app/App';
import SignUpPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import FlashMessages from './components/flash/FlashMessagesList';
import NewEventPage from './components/events/NewEventPage';

import requireAuth from './utils/requireAuth';

const GlobalRouter = props => {
  return (
      <BrowserRouter>
        <div className="container">
          <NavigationBar />
          <FlashMessages />
          <Route exact path="/" component={App} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/login" component={LoginPage} />  
          <Route path="/new-event" component={requireAuth(NewEventPage)} />
        </div>
      </BrowserRouter>
  )
}

export default GlobalRouter;