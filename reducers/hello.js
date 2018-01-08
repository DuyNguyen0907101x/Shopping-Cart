import { fromJS } from 'immutable';
import { SAY_HELLO } from '../actions';

const initialState = fromJS({
  msg: null
});
const helloReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAY_HELLO:
      return state.set('msg', action.msg);
    default:
      return state;
  }
};

export default helloReducer;
