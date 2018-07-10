export const FETCH_CURR_USER_PROFILE = 'FETCH_CURR_USER_PROFILE';
export const START_FETCH_CURR_USER_PROFILE = 'START_FETCH_CURR_USER_PROFILE';
export const SUCCESS_FETCH_CURR_USER_PROFILE = 'SUCCESS_FETCH_CURR_USER_PROFILE';
export const FAILURE_FETCH_CURR_USER_PROFILES = 'FAILURE_FETCH_CURR_USER_PROFILE';

export const startFetchCurrUserProfile = () => ({
  type: START_FETCH_CURR_USER_PROFILE,
});

export const successFetchCurrUserProfile = user => ({
  type: SUCCESS_FETCH_CURR_USER_PROFILE,
  user,
});

export const failureFetchCurrUserProfile = err => ({
  type: FAILURE_FETCH_CURR_USER_PROFILES,
  err,
});
