import { SAY_HELLO } from '../actions';

const helloMsg = (state = null, action) => {
  switch (action.type) {
    case SAY_HELLO:
      return action.msg;
    default:
      return state;
  }
};

export default helloMsg;
