import { combineReducers } from 'redux';

import fakeReducer from './fakeReducer';
import users from './fetchUsers';
import messages from './fetchMessages';
import currentUser from './user';

export default combineReducers({
  fakeReducer,
  users,
  messages,
  currentUser,
});
