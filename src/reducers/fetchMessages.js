import {SUCCESS_FETCH_MESSAGES} from "../actions/fetchMessages";

export default (state = {}, action) => {
  console.log(state);
  switch (action.type) {
    case SUCCESS_FETCH_MESSAGES:
      return action.messages;
    default:
      return state;
  }
};
