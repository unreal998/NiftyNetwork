import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';

import './AuthPage.scss';

export default class AuthPage extends Component {
  render() {
    let bufEmailInput;
    let bufPasswordInput;
    let emailInput = '';
    let passwordInput = '';

    if (this.props.currentUser.displayName !== undefined) {
      return <Redirect to='/home'/>;
    }
    return (
      <div className="formWindow">
        <div className="form">
          <div className="formHead">Welcome to Nifty network!</div>
          <div className="formField">
            <label htmlFor="email" className="fieldLabel">E-mail:</label>
            <input
              ref={ (node) => { bufEmailInput = node; } }
              onChange={ () => { emailInput = bufEmailInput.value; } }
              type="text"
              id="email"
              className="fieldInput"></input>
          </div>
          <div className="formField" >
            <label htmlFor="password" className="fieldLabel">Password: </label>
            <input
              ref={ (node) => { bufPasswordInput = node; } }
              onChange={ () => { passwordInput = bufPasswordInput.value; } }
              type="password"
              id="password"
              className="fieldInput"></input>
          </div>
          <div className="authBtns">
            <button onClick={() => this.props.signInUser(
              emailInput.length === 0 ? 'root@mail.com' : emailInput,
              passwordInput.length === 0 ? '12345678' : passwordInput,
            )} className="formBtn signInBtn">Sign in</button>
            <span>or</span>
            <Link to='/signup' className="formBtn signUpBtn">Sign up</Link>
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
  signInUser: PropsTypes.func,
  currentUser: PropsTypes.object,
  toSignUpPage: PropsTypes.func,
};
