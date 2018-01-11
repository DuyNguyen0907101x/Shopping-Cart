export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_FILTER_TYPE = 'SET_FILTER_TYPE';

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    todo: {
      id: Date.now().toString(),
      done: false,
      text
    }
  };
}

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  };
};

export const setFilterType = (filterType) => {
  return {
    type: SET_FILTER_TYPE,
    filterType
  };
};
