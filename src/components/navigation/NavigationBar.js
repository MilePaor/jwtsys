import React from 'react';
import { Link } from 'react-router-dom';

 export default () => {
   return (
    <nav className="navbar navbar-default bg-light">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/"className="navbar-brand">Red Dice</Link>
          </div>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Sign up</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
          </ul>
          
        </div>
      </nav>
   );
 }