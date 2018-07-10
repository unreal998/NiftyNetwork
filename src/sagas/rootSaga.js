import { all } from 'redux-saga/effects';
import fakeSaga from './fakeSaga';
import watchCreateUser from './createUser';
import watchSignInUser from './signInUser';
import watchFetchUsers from './fetchUsers';
import watchFetchCurrUserProfile from './fetchCurrUserProfile';

export default function* rootSaga() {
  yield all([
    fakeSaga(),
    watchCreateUser(),
    watchSignInUser(),
    watchFetchUsers(),
    watchFetchCurrUserProfile(),
  ]);
}
