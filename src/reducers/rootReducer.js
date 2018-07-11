import { combineReducers } from 'redux';
import users from './fetchUsers';
import messages from './fetchMessages';
import currentUser from './user';
import colorReducer from './colorReducer';
import addNiftReducer from './addNiftReducer';

export default combineReducers({
  users,
  messages,
  currentUser,
  colorReducer,
  addNiftReducer,
});
