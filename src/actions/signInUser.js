export const SIGN_IN_USER = 'SIGN_IN_USER';
export const START_SIGN_IN_USER = 'START_SIGN_IN_USER';
export const SUCCESS_SIGN_IN_USER = 'SUCCESS_SIGN_IN_USER';
export const FAILURE_SIGN_IN_USER = 'FAILURE_SIGN_IN_USER';

export const signInUser = (email, password) => ({
  type: SIGN_IN_USER,
  email,
  password,
});

export const startSignInUser = () => ({
  type: START_SIGN_IN_USER,
});

export const successSignInUser = user => ({
  type: SUCCESS_SIGN_IN_USER,
  user,
});

export const failureSignInUser = err => ({
  type: FAILURE_SIGN_IN_USER,
  err,
});
