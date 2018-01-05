import { combineReducers } from 'redux';

import {
  ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT , CHECKOUT_SUCCESS, CHECKOUT_FAILURE
} from '../actions';

/*
  object of product quantity by Ids in cartItems
*/
const quantityByIds = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { id } = action;
      return { ...state, [id]: (state[id] || 0) + 1 }
    }
    case REMOVE_FROM_CART: {
      const { id } = action;
      const quantity = { ...state };
      if (quantity[id] > 1) {
        quantity[id]--;
      } else {
        delete quantity[id];
      }
      return quantity;
    }
    case CHECKOUT_SUCCESS: {
      return {};
    }
    default:
      return state;
  }
};

const checkoutPending = (state = false, action) => {
  switch (action.type) {
    case CHECKOUT:
      return true;
    case CHECKOUT_SUCCESS:
    case CHECKOUT_FAILURE:
      return false;
    default:
      return state;
  }
}

const checkoutError = (state = null, action) => {
  switch (action.type) {
    case CHECKOUT:
    case CHECKOUT_SUCCESS:
      return null;
    case CHECKOUT_FAILURE:
      return action.error;
    default:
      return state;
  }
}

const cart = combineReducers({
  quantityByIds,
  checkoutPending,
  checkoutError
});


export default cart;
