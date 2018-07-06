import React, { Component } from 'react';

export default class AuthPage extends Component {
  render() {
    console.log(this);
    return (
      <div className="AuthPageContainer">
        <p>E-mail</p>
        <input type="text"></input>
        <p>Password</p>
        <input type="text"></input>
      </div>
    )
  }
}
