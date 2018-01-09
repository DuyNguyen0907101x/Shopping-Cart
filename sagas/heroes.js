import { fork, put, call, all, takeEvery } from 'redux-saga/effects';
import { api } from '../services';
import * as actions from '../actions';

export function* getHeroes() {
  const heroes = yield(call(api.getHeroes));
  yield put(actions.receiveHeroesSuccess(heroes));
}

export function* watchGetHero() {
  yield takeEvery(actions.GET_HEROES, getHeroes);
}

export default function* heroesSaga() {
  yield all([
    fork(watchGetHero)
  ]);
}
