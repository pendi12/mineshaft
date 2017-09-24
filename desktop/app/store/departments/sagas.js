import { takeEvery, all } from 'redux-saga/effects';

import apollo from './apollo/sagas'
import notifications from './notifications/sagas'

export default function* rootSaga() {
  yield all([
    apollo(),
    notifications(),
  ]);
}