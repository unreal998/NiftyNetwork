import { SUCCESS_CREATE_USER } from '../actions/createUser';
import { SUCCESS_FETCH_CURR_USER_PROFILE } from '../actions/fetchCurrUserProfile';

export default (state = {}, action) => {
  switch (action.type) {
    case SUCCESS_CREATE_USER:
    case SUCCESS_FETCH_CURR_USER_PROFILE:
      return action.user;
    default:
      return state;
  }
};
