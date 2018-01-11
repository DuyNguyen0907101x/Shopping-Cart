import React, { Component } from 'react';

import FilterLink from '../FilterLink';

export default class ToggleMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p>
        <FilterLink filterType="SHOW_ALL" text="All" />&nbsp;
        <FilterLink filterType="SHOW_DONE" text="Done" />&nbsp;
        <FilterLink filterType="SHOW_UNDONE" text="Undone" />
      </p>
    );
  }
}
