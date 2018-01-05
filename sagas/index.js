import { fork, put, call, all, takeEvery, select } from 'redux-saga/effects';
import { api } from '../services';
import * as actions from '../actions';
import { selectCart } from '../selectors';

export function* getAllProducts() {
  const products = yield(call(api.getAllProducts));
  yield put(actions.receiveProducts(products));
}

export function* checkout() {
  try {
    const cart = yield select(selectCart);
    yield call(api.purchase, cart);
    yield put(actions.checkoutSuccess(cart));
  } catch(error) {
    yield put(actions.checkoutFailure(error));
  }
}

export function* watchGetAllProducts() {
  yield takeEvery(actions.GET_ALL_PRODUCTS, getAllProducts)
}

export function* watchCheckout() {
  yield takeEvery(actions.CHECKOUT, checkout);
}

export default function* rootSaga() {
  yield all([
    fork(getAllProducts),
    fork(watchGetAllProducts),
    fork(watchCheckout)
  ]);
}
