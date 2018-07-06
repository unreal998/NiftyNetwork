import React, { Component } from 'react';
import './AuthPage.scss';
import PropTypes from 'prop-types';
import { auth } from 'firebase';

export default class AuthPage extends Component {
  render() {
    console.log(this);
    return (
      <div className="authPageContainer">
        <div className="authForm">
          <div className="authHead">Welcome to Nifty network!</div>
          <div className="authField">
            <label htmlFor="email">E-mail:</label>
            <input type="text" id="email"></input>
          </div>
          <div className="authField">
            <label htmlFor="password">Password: </label>
            <input type="password" id="password"></input>
          </div>
          <div className="authBtns">
          <button className="authBtn signInBtn" onClick={() => auth()}>Sign in</button>
            <span>or</span>
            <button className="authBtn signUpBtn">Sign up</button>
          </div>
          <div className="authFooter">
            <div className="authFooterItem"><a href="#" className="authFooterLink">Forgot password?</a></div>
          </div>
          
       </div>
      </div>
    );
  }
}


AuthPage.propTypes = {
  auth: PropTypes.func,
};
