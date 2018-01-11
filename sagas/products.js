import { fork, put, call, all, takeEvery, select } from 'redux-saga/effects';
import { api } from '../services';
import * as actions from '../actions';
import { selectCartQuantityByIds, selectQueryHeroName } from '../selectors';

export function* getAllProducts() {
  const products = yield(call(api.getAllProducts));
  yield put(actions.receiveProducts(products));
}

export function* watchGetAllProducts() {
  yield takeEvery(actions.GET_ALL_PRODUCTS, getAllProducts);
}

export default function* productsSaga() {
  yield all([
    fork(getAllProducts),
    fork(watchGetAllProducts)
  ]);
}
