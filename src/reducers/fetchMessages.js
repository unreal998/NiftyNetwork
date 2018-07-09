import { SUCCESS_FETCH_MESSAGES } from '../actions/fetchMessages';

export default (state = {}, action) => {
  switch (action.type) {
    case SUCCESS_FETCH_MESSAGES:
      return action.messages;
    default:
      return state;
  }
};
