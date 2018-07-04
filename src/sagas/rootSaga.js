import {all} from 'redux-saga/effects';
import {fakeSaga} from "./fakeSaga";

export default function* rootSaga() {
  yield all([
    fakeSaga(),
  ]
  )
}
