import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import TodoItem from '../TodoItem';
import { toggleTodo } from '../../actions';
import { selectFilteredTodosList } from '../../selectors';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const todos = this.props.todos.map(todo => (
      <li key={todo.id}>
        <TodoItem
          todo={todo}
          onToggle={() => this.props.toggleTodo(todo.id)}
        />
      </li>
    ));
    return (
      <ul>
        {todos}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: selectFilteredTodosList(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: function(id) {
      dispatch(toggleTodo(id));
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
