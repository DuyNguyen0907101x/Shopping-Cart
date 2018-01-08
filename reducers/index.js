import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';
import helloMsg from './helloMsg';

const rootReducer = combineReducers({
  products,
  cart,
  helloMsg
});

export default rootReducer;
