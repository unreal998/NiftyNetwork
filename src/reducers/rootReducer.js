import { combineReducers } from 'redux';
import fakeReducer from './fakeReducer';
import ActivityReducer from './ActivityReducer';

export default combineReducers({
  fakeReducer, ActivityReducer,
});
