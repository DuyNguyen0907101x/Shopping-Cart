import { all } from 'redux-saga/effects';

import productsSaga from './products';
import cartSaga from './cart';
import heroesSaga from './heroes';

export default function* rootSaga() {
  yield all([
    productsSaga(),
    cartSaga(),
    heroesSaga()
  ]);
}
