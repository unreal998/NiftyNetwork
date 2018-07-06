import { SUCCESS_CREATE_USER } from '../actions/createUser';
import { SIGN_IN_USER } from '../actions/signInUser';

export default (state = {}, action) => {
  switch (action.type) {
    case SUCCESS_CREATE_USER:
    case SIGN_IN_USER:
      return action.user;
    default:
      return state;
  }
};
