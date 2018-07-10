import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import AuthPage from '../components/AuthPage/AuthPage';
import { signInUser } from '../actions/signInUser';

const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

const mapDispatchToProps = dispatch => ({
  signInUser: (
    email,
    password,
  ) => dispatch(signInUser(email, password)),
  /* eslint-disable */
  toSignUpPage: () => <Redirect to='/signup'/>,
  /* eslint-enabled */
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
