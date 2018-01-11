import { combineReducers } from 'redux-immutable';
import productsReducer from './products';
import cartReducer from './cart';
import helloReducer from './hello';
import heroesReducer from './heroes';
import todosReducer from './todos';

const rootReducer = combineReducers({
  productsReducer,
  cartReducer,
  helloReducer,
  heroesReducer,
  todosReducer
});

export default rootReducer;
