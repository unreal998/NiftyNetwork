import { combineReducers } from 'redux';
import users from './fetchUsers';
import messages from './fetchMessages';
import currentUser from './user';

export default combineReducers({
  users,
  messages,
  currentUser,
});
