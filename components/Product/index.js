import React, { Component, PropTypes } from 'react';

const Product = ({ title, price, quantity, action }) => {
  return (
    <p>
      {title} - ${price} - {quantity}
      &nbsp;&nbsp;&nbsp;
      {action}
    </p>
  );
};

Product.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  action: React.PropTypes.node
};

export default Product;
