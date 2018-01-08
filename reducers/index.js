import { combineReducers } from 'redux-immutable';
import productsReducer from './products';
import cartReducer from './cart';
import helloReducer from './hello';

const rootReducer = combineReducers({
  productsReducer,
  cartReducer,
  helloReducer
});

export default rootReducer;
