import { put, call, takeEvery } from 'redux-saga/effects';

import { auth, databaseRef } from '../firebase/firebase';
import { CREATE_USER, successCreateUser, failureCreateUser } from '../actions/createUser';

function* createUser(action) {
  try {
    const response = yield call(
      [auth, auth.createUserWithEmailAndPassword],
      action.email,
      action.password,
    );

    const { user } = response;
    try {
      yield call(
        [user, user.updateProfile],
        {
          displayName: `${action.name} ${action.surname}`,
        },
      );
      try {
        const newUserRef = databaseRef.child('users').child(user.uid);
        const userForDB = { ...user.providerData[0], uid: user.uid, metadata: user.metadata };
        yield call(
          [newUserRef, newUserRef.set],
          userForDB,
        );
        yield put(successCreateUser(userForDB));
      } catch (err) {
        yield put(failureCreateUser(err));
      }
    } catch (err) {
      yield put(failureCreateUser(err));
    }
  } catch (err) {
    yield put(failureCreateUser(err));
  }
}

export default function* watchCreateUser() {
  yield takeEvery(CREATE_USER, createUser);
}