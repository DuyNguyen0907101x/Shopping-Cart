import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { toJS } from '../../utils/HOC';
import CartItem from '../CartItem';
import { removeFromCart } from '../../actions';
import { selectCartProducts } from '../../selectors';

class CartList extends Component {
  constructor(props) {
    super(props);
  }

  renderCarts() {
    const { cartItems } = this.props;

    if (!cartItems.length) {
      return (
        <i>Please add some products to cart</i>
      );
    }
    return this.props.cartItems.map(item => {
      return (
        <CartItem
          key={item.id}
          product={item}
          onRemoveFromCart={() => this.props.onRemoveFromCart(item.id)}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Your Cart</h2>
        {this.renderCarts()}
      </div>
    );
  }
}

CartList.PropTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
      quantity: PropTypes.number
    })
  ),
  onRemoveFromCart: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartProducts()
});

const mapDispatchToProps = (dispatch) => ({
  onRemoveFromCart: function(id) {
    dispatch(removeFromCart(id));
  }
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const ComponentWithJSProps = toJS(CartList);

export default compose(
  withConnect
)(ComponentWithJSProps);
