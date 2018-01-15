import { createSelector } from 'reselect';

import { selectProductsByIds } from './products';

export const selectCart = (state) => state.get('cartReducer');

export const selectQuantityByIds = (state) => state
  .getIn(['cartReducer', 'quantityByIds']);

export const selectCheckoutPending = () => createSelector(
  selectCart,
  cart => cart.get('checkoutPending')
);

export const selectCheckoutError = () => createSelector(
  selectCart,
  cart => cart.get('checkoutError')
);

export const selectCartProducts = () => createSelector(
  [ selectProductsByIds, selectQuantityByIds ],
  (byIds, quantityByIds) => quantityByIds
    .keySeq()
    .toList()
    .map(id => byIds
      .get(id)
      .merge({ quantity: quantityByIds.get(id) })
    )
);

export const selectTotal = () => createSelector(
  [ selectProductsByIds, selectQuantityByIds ],
  (byIds, quantityByIds) => quantityByIds
    .keySeq()
    .reduce((total, id) => {
      const price = byIds.getIn([id, 'price']);
      const quantity = quantityByIds.get(id);
      return total + price * quantity
    }, 0)
    .toFixed(2)
);
