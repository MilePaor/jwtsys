import React from 'react';
import { Link } from 'react-router-dom';

 export default () => {
   return (
    <nav className="navbar navbar-default bg-light">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/"className="navbar-brand">Red Dice</Link>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          
        </div>
      </nav>
   );
 }