export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const START_FETCH_MESSAGES = 'START_FETCH_MESSAGES';
export const SUCCESS_FETCH_MESSAGES = 'SUCCESS_FETCH_MESSAGES';
export const FAILURE_FETCH_MESSAGES = 'FAILURE_FETCH_MESSAGES';

export const startFetchMessages = () => ({
  type: START_FETCH_MESSAGES
});

export const successFetchMessages = messages => ({
  type: SUCCESS_FETCH_MESSAGES,
  messages
});

export const failureFetchMessages = err => ({
  type: FAILURE_FETCH_MESSAGES,
  err
});
