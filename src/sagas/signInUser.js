import { put, call, takeEvery } from 'redux-saga/effects';

import { auth } from '../firebase/firebase';
import { SIGN_IN_USER, successSignInUser, failureSignInUser } from '../actions/signInUser';

function* signInUser(action) {
  try {
    const response = yield call(
      [auth, auth.signInWithEmailAndPassword],
      action.email,
      action.password,
    );
    const { user } = response;
    yield put(successSignInUser(user.uid));
  } catch (err) {
    yield put(failureSignInUser(err));
  }
}

export default function* watchSignInUser() {
  yield takeEvery(SIGN_IN_USER, signInUser);
}