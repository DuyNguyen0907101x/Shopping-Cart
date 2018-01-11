import products from './products';

const PROCESSING_TIMEOUT = 2000;
const MAX_CHECKOUT_QUANTITY = 2;

export const api = {
  getAllProducts: function() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(products), PROCESSING_TIMEOUT);
    });
  },
  purchase: function(cart) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (cart.size <= MAX_CHECKOUT_QUANTITY) {
          resolve(cart);
        } else {
          reject(`You can only purchase ${MAX_CHECKOUT_QUANTITY} types of products at maximum!`);
        }
      }, PROCESSING_TIMEOUT);
    });
  }
}
