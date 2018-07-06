export const FETCH_USERS = 'FETCH_USERS';
export const START_FETCH_USERS = 'START_FETCH_USERS';
export const SUCCESS_FETCH_USERS = 'SUCCESS_FETCH_USERS';
export const FAILURE_FETCH_USERS = 'FAILURE_FETCH_USERS';

export const startFetchUsers = () => ({
  type: START_FETCH_USERS,
});

export const successFetchUsers = users => ({
  type: SUCCESS_FETCH_USERS,
  users,
});

export const failureFetchUsers = err => ({
  type: FAILURE_FETCH_USERS,
  err,
});
