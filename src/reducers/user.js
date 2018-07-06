import { SUCCESS_CREATE_USER } from '../actions/createUser';
import { SUCCESS_SIGN_IN_USER } from '../actions/signInUser';

export default (state = {}, action) => {
  switch (action.type) {
    case SUCCESS_CREATE_USER:
    case SUCCESS_SIGN_IN_USER:
      return action.user;
    default:
      return state;
  }
};
