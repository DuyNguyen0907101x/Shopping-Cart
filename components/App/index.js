import React from 'react';

import Hello from '../Hello';
import HeroesSearch from '../HeroesSearch';
import ProductPanel from '../ProductPanel';
import CartPanel from '../CartPanel';
import TodosPanel from '../TodosPanel';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Shopping Cart Demo with React, Redux, Redux-Saga & Reselect</h1>
        <Hello />
        <hr/>
        <HeroesSearch />
        <hr/>
        <TodosPanel />
        <hr/>
        <ProductPanel />
        <hr/>
        <CartPanel />
      </div>
    );
  }
}
