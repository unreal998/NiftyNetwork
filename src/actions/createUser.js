export const CREATE_USER = 'CREATE_USER';
export const START_CREATE_USER = 'START_CREATE_USER';
export const SUCCESS_CREATE_USER = 'SUCCESS_CREATE_USER';
export const FAILURE_CREATE_USER = 'FAILURE_CREATE_USER';

export const createUser = (email, password, name, surname) => ({
  type: CREATE_USER,
  email,
  password,
  name,
  surname,
});

export const startCreateUser = () => ({
  type: START_CREATE_USER,
});

export const successCreateUser = user => ({
  type: SUCCESS_CREATE_USER,
  user,
});

export const failureCreateUser = err => ({
  type: FAILURE_CREATE_USER,
  err,
});
