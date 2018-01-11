import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../../actions';

class TodoAdd extends Component {
  constructor(props) {
    super(props);
  }

  handleInputTodo(e) {
    if (e.keyCode !== 13) {
      return;
    }

    this.props.addTodo(e.target.value);
    e.target.value = '';
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Input a todo"
          onKeyDown={(e) => this.handleInputTodo(e)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: function(todo) {
      dispatch(addTodo(todo));
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(TodoAdd);
