import { SUCCESS_FETCH_USERS } from '../actions/fetchUsers';

export default (state = {}, action) => {
  switch (action.type) {
    case SUCCESS_FETCH_USERS:
      return action.users;
    default:
      return state;
  }
};
