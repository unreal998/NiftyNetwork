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
    console.log(user);
    try {
      yield call(
        [user, user.updateProfile],
        {
          displayName: `${action.name} ${action.surname}`,
        },
      );
      try {
        const newUserRef = databaseRef.child('users').push();
        const userForDB = { ...user.providerData[0], uid: user.uid, metadata: user.metadata };
        console.log(userForDB);
        yield call(
          [newUserRef, newUserRef.set],
          userForDB,
        );
        yield put(successCreateUser(userForDB));
      } catch (err) {
        console.log(err);
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
