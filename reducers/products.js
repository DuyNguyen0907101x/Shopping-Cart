import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';

import { RECEIVE_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART } from '../actions';


/*
  object of products by ids
*/
const initialState = fromJS({});
const byIds = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS: {
      const byIds = action.products.reduce((obj, item) => {
        obj[item.id] = item;
        return obj;
      }, {});
      return state.merge(byIds);
    }

    case ADD_TO_CART: {
      const id = action.id.toString();
      const inventory = state.getIn([id, 'inventory']);

      return state.setIn([id, 'inventory'], inventory - 1);
    }

    case REMOVE_FROM_CART: {
      const id = action.id.toString();
      const inventory = state.getIn([id, 'inventory']);

      return state.setIn([id, 'inventory'], inventory + 1);
    }

    default:
      return state;
  }
}

const productsReducer = combineReducers({
  byIds
});

export default productsReducer;
