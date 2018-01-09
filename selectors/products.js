import { createSelector } from 'reselect';

export const selectProducts = (state) => state.get('productsReducer');

export const selectProductsByIds = createSelector(
  selectProducts,
  products => products.get('byIds')
);

export const selectAllProducts = createSelector(
  [ selectProductsByIds ],
  (byIds) => byIds
    .keySeq()
    .toArray()
    .map(id => byIds.get(id).toJS())
);
