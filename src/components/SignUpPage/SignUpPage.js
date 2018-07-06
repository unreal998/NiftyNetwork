import React, { Component } from 'react';
import './SignUpPage.scss';

export default class SignUpPage extends Component {
  render() {
    console.log(this);
    return (
      <div className="formWindow">
        <div className="form">
          <div className="formHead">Create account in Nifty!</div>
          <div className="formField">
            <label htmlFor="email" className="fieldLabel">E-mail:</label>
            <input type="text" id="email" className="fieldInput"></input>
          </div>
          <div className="formField">
            <label htmlFor="password" className="fieldLabel">Password: </label>
            <input type="password" id="password" className="fieldInput"></input>
          </div>
          <div className="formField">
            <label htmlFor="rePassword" className="fieldLabel">Confirm password: </label>
            <input type="password" id="rePassword" className="fieldInput"></input>
          </div>
          <div className="authBtns">
            <button className="formBtn createAccountBtn">Create account</button>
          </div>
         
          <div className="formFooter">
            <a href="#" className="formFooterLink">Have account?</a>
          </div>
       </div>
      </div>
    );
  }
}
