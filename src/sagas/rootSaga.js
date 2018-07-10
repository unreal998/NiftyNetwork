import { all } from 'redux-saga/effects';
import watchCreateUser from './createUser';
import watchSignInUser from './signInUser';

export default function* rootSaga() {
  yield all([
    watchCreateUser(),
    watchSignInUser(),
  ]);
}
