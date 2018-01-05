import React, { Component, PropTypes } from 'react';
import Product from '../Product';

const ProductItem = ({ product, onAddToCart }) => {
  return (
    <Product
      title={product.title}
      price={product.price}
      quantity={product.inventory}
      action={
        <button
          onClick={onAddToCart}
          disabled={product.inventory === 0}
        >{product.inventory === 0 ? 'Sold out' : 'Add to cart'}</button>
      }
    />
  );
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired
};

export default ProductItem;
