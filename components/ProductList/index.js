import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../../actions';
import { selectAllProducts } from '../../selectors';

import ProductItem from '../ProductItem';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderProducts() {
    const { products } = this.props;
    if (!products.length) {
      return (
        <p>Importing Product...</p>
      );
    }

    return products.map((product) => {
      return (
        <ProductItem
          key={product.id}
          product={product}
          onAddToCart={() => this.props.onAddToCart(product.id)}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Product List</h2>
        {this.renderProducts()}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
      inventory: PropTypes.number
    })
  ),
  onAddToCart: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    products: selectAllProducts(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToCart: function(id) {
      dispatch(addToCart(id))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
