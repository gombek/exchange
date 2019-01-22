import { takeLatest, take, put, call, cancel, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { oxrApi }  from '../../api';
import { startLive, stopLive } from './actions';
import { walletRates, currencies, exchanger } from '../../modules'

function* live() {
  while (true) {
    yield call(updateRates);
    yield delay(10000);
  }
}

function* updateRates() {
  const from = yield select(exchanger.selectors.getFrom);
  const to = yield select(currencies.selectors.get);
  const rates = yield call(oxrApi.latest, from, to);
  yield put(walletRates.actions.set(rates));
}

export function* saga() {
  while (true) {
    const liveRatesTask = yield takeLatest(startLive.type, live);
    yield take(stopLive.type);
    yield cancel(liveRatesTask);
  }
}
