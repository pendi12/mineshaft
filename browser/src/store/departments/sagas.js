import { takeEvery, all } from 'redux-saga/effects';

import authentication from './authentication/sagas'
import apollo from './apollo/sagas'
import database from './database/sagas'
import notifications from './notifications/sagas'
import stripe from './stripe/sagas'
import mining from './mining/sagas'

export default function* rootSaga() {
  yield all([
    authentication(),
    apollo(),
    database(),
    notifications(),
    stripe(),
    mining()
  ]);
}