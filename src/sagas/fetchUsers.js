import { put, take, takeEvery } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

import { databaseRef } from '../firebase/firebase';
import { FETCH_USERS, successFetchUsers } from '../actions/fetchUsers';

function fetchUsersChannel() {
  const listener = eventChannel(
    (emit) => {
      databaseRef.child('users')
        .on(
          'value',
          data => emit({ users: data.val() }),
        );
      return () => databaseRef.child('users').off(listener);
    },
  );

  return listener;
}

function* fetchUsers() {
  const updateChannel = fetchUsersChannel();
  while (true) {
    const emitedUsers = yield take(updateChannel);
    yield put(successFetchUsers(emitedUsers.users));
  }
}

export default function* watchFetchUsers() {
  yield takeEvery(FETCH_USERS, fetchUsers);
}
