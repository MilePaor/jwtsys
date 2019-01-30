import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import GlobalRouter from './GlobalRouter';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const store = createStore((state = {}) => state,applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <GlobalRouter />
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
