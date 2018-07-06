import { put, call, takeEvery } from 'redux-saga/effects';

import { auth } from '../firebase/firebase';
import { CREATE_USER, successCreateUser, failureCreateUser } from '../actions/createUser';

function* createUser(action) {
  try {
    const response = yield call(
      [auth, auth.createUserWithEmailAndPassword],
      action.email,
      action.password,
    );
    console.log(response.user);
    yield put(successCreateUser(response.user));
  } catch (err) {
    yield put(failureCreateUser(err));
  }
}

export default function* watchCreateUser() {
  yield takeEvery(CREATE_USER, createUser);
}
