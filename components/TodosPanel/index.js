import React, { Component, PropTypes } from 'react';
import TodoAdd from '../TodoAdd';
import TodoList from '../TodoList';
import TodoMenu from '../TodoMenu';

export default class TodosPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <TodoAdd />
        <TodoList />
        <TodoMenu />
      </div>
    );
  }
}
