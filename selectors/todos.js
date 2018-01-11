import { createSelector } from 'reselect';

export const selectTodos = (state) => state.get('todosReducer');

export const selectTodosList = createSelector(
  selectTodos,
  todos => todos.get('todos')
);

export const selectFilterType = createSelector(
  selectTodos,
  todos => todos.get('filterType')
);

export const selectFilterLinkActive = createSelector(
  [
    selectFilterType,
    (state, props) => props.filterType,
  ],
  (currentFilterType, filterType) => currentFilterType === filterType
);

export const selectFilteredTodosList = createSelector(
  [ selectTodosList, selectFilterType ],
  (todos, filterType) => {
    const todoList = todos.valueSeq();
    let filteredTodosList;

    switch (filterType) {
      case 'SHOW_ALL':
        filteredTodosList = todoList;
        break;
      case 'SHOW_DONE':
        filteredTodosList = todoList.filter(todo => todo.get('done'));
        break;
      case 'SHOW_UNDONE':
        filteredTodosList = todoList.filter(todo => !todo.get('done'));
        break;
      default:
    }
    return filteredTodosList.toJS();
  }
);
