import React, { Component } from 'react';
import PropsTypes from 'prop-types';

import './SignUpPage.scss';

export default class SignUpPage extends Component {
  render() {
    let bufEmailInput;
    let bufPasswordInput;
    let emailInput;
    let passwordInput;

    return (
      <div className="formWindow">
        <div className="form">
          <div className="formHead">Create account in Nifty!</div>
          <div className="formField">
            <label htmlFor="email" className="fieldLabel">E-mail:</label>
            <input
              ref={ (node) => { bufEmailInput = node; } }
              onChange={ () => { emailInput = bufEmailInput.value; } }
              type="text"
              id="email"
              className="fieldInput"></input>
          </div>
          <div className="formField">
            <label htmlFor="password" className="fieldLabel">Password: </label>
            <input
              ref={ (node) => { bufPasswordInput = node; } }
              onChange={ () => { passwordInput = bufPasswordInput.value; } }
              type="password"
              id="password"
              className="fieldInput"></input>
          </div>
          <div className="formField">
            <label htmlFor="rePassword" className="fieldLabel">Confirm password: </label>
            <input type="password" id="rePassword" className="fieldInput"></input>
          </div>
          <div className="authBtns">
            <button
              onClick={ () => this.props.createUser(emailInput, passwordInput) }
              className="formBtn createAccountBtn">Create account</button>
          </div>

          <div className="formFooter">
            <a href="#" className="formFooterLink">Have account?</a>
          </div>
       </div>
      </div>
    );
  }
}

SignUpPage.propTypes = {
  createUser: PropsTypes.func,
};
