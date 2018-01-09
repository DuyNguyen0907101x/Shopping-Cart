import { combineReducers } from 'redux-immutable';
import productsReducer from './products';
import cartReducer from './cart';
import helloReducer from './hello';
import heroesReducer from './heroes';

const rootReducer = combineReducers({
  productsReducer,
  cartReducer,
  helloReducer,
  heroesReducer
});

export default rootReducer;
