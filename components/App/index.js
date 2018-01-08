import React from 'react';

import Hello from '../Hello';
import ProductPanel from '../ProductPanel';
import CartPanel from '../CartPanel';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Shopping Cart Demo with React, Redux, Redux-Saga & Reselect</h1>
        <Hello />
        <hr/>
        <ProductPanel />
        <hr/>
        <CartPanel />
      </div>
    );
  }
}
