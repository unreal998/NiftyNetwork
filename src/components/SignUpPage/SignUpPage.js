import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import './SignUpPage.scss';

export default class SignUpPage extends Component {
  render() {
    if (Object.keys(this.props.currentUser).length !== 0) {
      return <Redirect to='/home'/>;
    }

    let bufEmailInput;
    let bufPasswordInput;
    let emailInput;
    let passwordInput;

    let bufNameInput;
    let bufSurnameInput;
    let nameInput;
    let surnameInput;

    return (
      <div className="formWindow">
        <div className="form">
          <div className="formHead">Create account in Nifty!</div>
          <div className="formField">
            <div className="formField">
              <label htmlFor="name" className="fieldLabel">Name:</label>
              <input
                ref={ (node) => { bufNameInput = node; } }
                onChange={ () => { nameInput = bufNameInput.value; } }
                type="text"
                id="name"
                className="fieldInput"></input>
            </div>
            <div className="formField">
              <label htmlFor="surname" className="fieldLabel">Surname:</label>
              <input
                ref={ (node) => { bufSurnameInput = node; } }
                onChange={ () => { surnameInput = bufSurnameInput.value; } }
                type="text"
                id="surname"
                className="fieldInput"></input>
            </div>
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
              onClick={ () => this.props.createUser(
                emailInput, passwordInput, nameInput, surnameInput,
              )}
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
  currentUser: PropsTypes.object,
};
