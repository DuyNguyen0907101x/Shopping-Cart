import { createSelector } from 'reselect';

export const selectCart = (state) => state.get('cartReducer');

export const selectProducts = (state) => state.get('productsReducer');

export const getProducts = createSelector(
  [ selectProducts ],
  (products) => {
    return products
      .get('byIds')
      .keySeq()
      .toArray()
      .map(id => products.getIn(['byIds', id]).toJS());
  }
);

export const getCartProducts = createSelector(
  [ selectProducts, selectCart ],
  (products, cart) => {
    return cart
      .get('quantityByIds')
      .keySeq()
      .toArray()
      .map(id => products
        .getIn(['byIds', id])
        .merge({ quantity: cart.getIn(['quantityByIds', id]) })
        .toJS()
      );
  }
);

export const getCheckoutPending = createSelector(
  [ selectCart ],
  (cart) => cart.get('checkoutPending')
);

export const getCheckoutError = createSelector(
  [ selectCart ],
  (cart) => cart.get('checkoutError')
);


export const getTotal = createSelector(
  [ selectProducts, selectCart ],
  (products, cart) => {
    const { byIds } = products;
    const { quantityByIds } = cart;

    return cart
      .get('quantityByIds')
      .keySeq()
      .toArray()
      .reduce((total, id) => {
        const price = products.getIn(['byIds', id, 'price']);
        const quantity = cart.getIn(['quantityByIds', id])
        return total + price * quantity;
      }, 0)
      .toFixed(2)
  }
);
