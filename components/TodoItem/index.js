import React, { PropTypes } from 'react';

const TodoItem = ({ todo, onToggle }) => {
  return (
    <p>
      <label>
        <input type="checkbox" checked={todo.done} onChange={() => onToggle()}/>
        <span>{todo.text}</span>
      </label>
    </p>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string,
    done: PropTypes.bool,
  }),
  onToggle: PropTypes.func
};

export default TodoItem;
