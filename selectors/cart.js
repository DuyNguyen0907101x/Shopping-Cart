import { createSelector } from 'reselect';

import { selectProductsByIds } from './products';

export const selectCart = (state) => state.get('cartReducer');

export const selectQuantityByIds = createSelector(
  selectCart,
  cart => cart.get('quantityByIds')
);

export const selectCheckoutPending = createSelector(
  selectCart,
  cart => cart.get('getCheckoutPending')
);

export const selectCheckoutError = createSelector(
  selectCart,
  cart => cart.get('checkoutError')
);

export const selectCartProducts = createSelector(
  [ selectProductsByIds, selectQuantityByIds ],
  (byIds, quantityByIds) => quantityByIds
    .keySeq()
    .toArray()
    .map(id => byIds
      .get(id)
      .merge({ quantity: quantityByIds.get(id) })
      .toJS()
    )
);

// export const getCheckoutPending = createSelector(
//   [ selectCheckoutPending ],
//   (checkoutPending) => checkoutPending
// );

// export const getCheckoutError = createSelector(
//   [ selectCheckoutError ],
//   (checkoutError) => checkoutError
// );

export const selectTotal = createSelector(
  [ selectProductsByIds, selectQuantityByIds ],
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
