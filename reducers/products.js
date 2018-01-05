import { combineReducers } from 'redux';

import { RECEIVE_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART } from '../actions';

/*
  object of products by ids
*/
const byIds = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS: {
      return action.products.reduce((obj, item) => {
        obj[item.id] = item;
        return obj;
      }, {});
    }

    case ADD_TO_CART: {
      const { id } = action;
      return {
        ...state,
        [id]: { ...state[id], inventory: state[id].inventory - 1 }
      };
    }

    case REMOVE_FROM_CART: {
      const { id  } = action;
      return {
        ...state,
        [id]: { ...state[id], inventory: state[id].inventory + 1 }
      };
    }

    default:
      return state;
  }
}

const products = combineReducers({
  byIds
});

export default products;
