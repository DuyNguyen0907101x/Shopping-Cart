import request from 'superagent';
import products from './products';

const PROCESSING_TIMEOUT = 2000;
const MAX_CHECKOUT_QUANTITY = 2;
const FETCH_HEROES_URL = 'https://api.myjson.com/bins/1g8hld';

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
  },
  getHeroes: function() {
    return request
      .get(FETCH_HEROES_URL)
      .then(res => res.body.heroes)
  }
};
