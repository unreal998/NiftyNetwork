import { all } from 'redux-saga/effects';
import fakeSaga from './fakeSaga';
import watchCreateUser from './createUser';
import watchSignInUser from './signInUser';

export default function* rootSaga() {
  yield all([
    fakeSaga(),
    watchCreateUser(),
    watchSignInUser(),
  ]);
}
