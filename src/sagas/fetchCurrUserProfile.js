import { put, take, takeEvery } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

import { databaseRef } from '../firebase/firebase';
import { successFetchCurrUserProfile } from '../actions/fetchCurrUserProfile';
import { SUCCESS_SIGN_IN_USER } from '../actions/signInUser';

function fetchCurrUserProfileChannel(id) {
  const listener = eventChannel(
    (emit) => {
      databaseRef.child('users').child(id)
        .once(
          'value',
        )
        .then((snap) => {
          emit({ user: snap.val() });
        });
      return () => databaseRef.child('user').child(id).off(listener);
    },
  );

  return listener;
}

function* fetchCurrUserProfile(action) {
  const updateChannel = fetchCurrUserProfileChannel(action.uid);
  while (true) {
    const emitedUser = yield take(updateChannel);
    yield put(successFetchCurrUserProfile(emitedUser.user));
  }
}

export default function* watchFetchCurrUserProfile() {
  yield takeEvery(SUCCESS_SIGN_IN_USER, fetchCurrUserProfile);
}
