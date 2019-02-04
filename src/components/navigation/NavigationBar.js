import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/authActions';


class NavigationBar extends Component {

  logout = (e) => {
    e.preventDefault();
    this.props.logout();
  }
  render(){
    const { isAuthenticated } = this.props.auth;
    const userLinks = (
    <ul className="nav">
      <li className="nav-item">
        <a href="#" onClick={this.logout}>Logout</a>
      </li>
    </ul>
    );
    const guestLinks = (
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link" to="/signup">Sign up</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
      </li>
    </ul>
    );
    return (
    <nav className="navbar navbar-default bg-light">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/"className="navbar-brand">Red Dice</Link>
          </div>
          { isAuthenticated ? userLinks : guestLinks}
        </div>
      </nav>
    );
  }
 }

 NavigationBar.propTypes = {
   auth: PropTypes.object.isRequired,
   logout: PropTypes.func.isRequired
 }

 function mapStateToProps(state) {
  return {
    auth: state.auth
  }
 }

 export default connect(mapStateToProps, { logout })(NavigationBar);