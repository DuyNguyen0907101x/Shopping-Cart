import { createSelector } from 'reselect';

export const selectProductsByIds = (state) => state.getIn(['productsReducer', 'byIds']);

export const selectCartQuantityByIds = (state) => state.getIn(['cartReducer', 'quantityByIds']);

export const selectCheckoutPending = (state) => state.getIn(['cartReducer', 'checkoutPending']);

export const selectCheckoutError = (state) => state.getIn(['cartReducer', 'checkoutError']);

export const selectHelloMsg = (state) => state.getIn(['helloReducer', 'msg']);

export const getHelloMsg = createSelector(
  [ selectHelloMsg ],
  (msg) => msg
);

export const getProducts = createSelector(
  [ selectProductsByIds ],
  (byIds) => byIds
    .keySeq()
    .toArray()
    .map(id => byIds.get(id).toJS())
);

export const getCartProducts = createSelector(
  [ selectProductsByIds, selectCartQuantityByIds ],
  (byIds, quantityByIds) => quantityByIds
    .keySeq()
    .toArray()
    .map(id => byIds
      .get(id)
      .merge({ quantity: quantityByIds.get(id) })
      .toJS()
    )
);

export const getCheckoutPending = createSelector(
  [ selectCheckoutPending ],
  (checkoutPending) => checkoutPending
);

export const getCheckoutError = createSelector(
  [ selectCheckoutError ],
  (checkoutError) => checkoutError
);

export const getTotal = createSelector(
  [ selectProductsByIds, selectCartQuantityByIds ],
  (byIds, quantityByIds) => quantityByIds
    .keySeq()
    .toArray()
    .reduce((total, id) => {
      const price = byIds.getIn([id, 'price']);
      const quantity = quantityByIds.get(id)
      return total + price * quantity;
    }, 0)
    .toFixed(2)
);
