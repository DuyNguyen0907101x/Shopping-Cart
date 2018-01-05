import React, { Component, PropTypes } from 'react';

import Product from '../Product';

const CartItem = ({ product, onRemoveFromCart }) => {
  return (
    <Product
      title={product.title}
      price={product.price}
      quantity={product.quantity}
      action={
        <button onClick={onRemoveFromCart}>X</button>
      }
    />
  );
};

CartItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  })
};

export default CartItem;
