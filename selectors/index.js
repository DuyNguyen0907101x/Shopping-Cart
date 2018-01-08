import { createSelector } from 'reselect';

export const selectCart = (state) => state.cart;

export const selectProducts = (state) => state.products;

export const getProducts = createSelector(
  [ selectProducts ],
  (products) => {
    const { byIds } = products;
    return Object.keys(byIds).map(id => {
      return byIds[id];
    })
  }
);

export const getCartProducts = createSelector(
  [ selectProducts, selectCart ],
  (products, cart) => {
    const { byIds } = products;
    const { quantityByIds } = cart;
    // console.log('recalculate cart')
    return Object.keys(quantityByIds).map(id => {
      return {
        ...byIds[id],
        quantity: quantityByIds[id]
      }
    });
  }
);

export const getCheckoutPending = createSelector(
  [ selectCart ],
  (cart) => cart.checkoutPending
);

export const getCheckoutError = createSelector(
  [ selectCart ],
  (cart) => cart.checkoutError
);


export const getTotal = createSelector(
  [ selectProducts, selectCart ],
  (products, cart) => {
    const { byIds } = products;
    const { quantityByIds } = cart;
    return Object
      .keys(quantityByIds)
      .reduce((total, id) => total + byIds[id].price * quantityByIds[id], 0)
      .toFixed(2);
  }
);
