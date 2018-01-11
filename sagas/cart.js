import { fork, put, call, all, takeEvery, select } from 'redux-saga/effects';
import { api } from '../services';
import * as actions from '../actions';
import { selectQuantityByIds } from '../selectors';

export function* checkout() {
  try {
    const cart = yield select(selectQuantityByIds);
    yield call(api.purchase, cart);
    yield put(actions.checkoutSuccess(cart));
  } catch(error) {
    yield put(actions.checkoutFailure(error));
  }
}

export function* watchCheckout() {
  yield takeEvery(actions.CHECKOUT, checkout);
}

export default function* cartSaga() {
  yield all([
    fork(watchCheckout)
  ]);
}
