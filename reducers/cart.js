import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';

import {
  ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT , CHECKOUT_SUCCESS, CHECKOUT_FAILURE
} from '../actions/cart';

/*
  object of product quantity by Ids in cartItems
*/
const initialState = fromJS({});
const quantityByIds = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const id = action.id.toString();
      return state.set(id, (state.get(id) || 0) + 1)
    }
    case REMOVE_FROM_CART: {
      const id = action.id.toString();
      const quantity = state.get(id);
      if (quantity > 1) {
        return state.set(id, quantity - 1);
      } else {
        return state.delete(id);
      }
    }
    case CHECKOUT_SUCCESS: {
      return initialState;
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

const cartReducer = combineReducers({
  quantityByIds,
  checkoutPending,
  checkoutError
});


export default cartReducer;
