import React, { Component } from 'react';
import './AuthPage.scss';
import PropTypes from 'prop-types';

export default class AuthPage extends Component {
  render() {
    console.log(this);
    return (
      <div className="formWindow">
        <div className="form">
          <div className="formHead">Welcome to Nifty network!</div>
          <div className="formField">
            <label htmlFor="email" className="fieldLabel">E-mail:</label>
            <input type="text" id="email" className="fieldInput"></input>
          </div>
          <div className="formField" >
            <label htmlFor="password" className="fieldLabel">Password: </label>
            <input type="password" id="password" className="fieldInput"></input>
          </div>
          <div className="authBtns">
            <button className="formBtn signInBtn">Sign in</button>
            <span>or</span>
            <button className="formBtn signUpBtn">Sign up</button>
          </div>
          <div className="formFooter">
            <div className="authFooterItem"><a href="#" className="formFooterLink">Forgot password?</a></div>
          </div>
          
       </div>
      </div>
    );
  }
}


AuthPage.propTypes = {
  auth: PropTypes.func,
};
