import { fromJS } from 'immutable';

import { ADD_TODO, TOGGLE_TODO, SET_FILTER_TYPE } from '../actions';

const initialState = fromJS({
  todos: {},
  filterType: 'SHOW_ALL'
});

const todosReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_TODO: {
      const { todo } = action;
      return state
        .set('todos', state.get('todos').merge({ [todo.id]: todo }));
    }

    case TOGGLE_TODO: {
      const { id } = action;
      return state
        .setIn(['todos', id, 'done'], !state.getIn(['todos', id, 'done']));
    }

    case SET_FILTER_TYPE: {
      return state.set('filterType', action.filterType);
    }

    default:
      return state;
  }
};

export default todosReducer;
