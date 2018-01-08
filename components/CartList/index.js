import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import CartItem from '../CartItem';
import { removeFromCart } from '../../actions';
import { getCartProducts } from '../../selectors';

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

const mapStateToProps = (state) => {
  return {
    cartItems: getCartProducts(state)
  };
};

// const mapStateToProps = (state) => {
//   const { byIds } = state.products;
//   const { quantityByIds } = state.cart;
//   return {
//     cartItems: Object.keys(quantityByIds).map(id => {
//       return {
//         ...byIds[id],
//         quantity: quantityByIds[id]
//       }
//     })
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveFromCart: function(id) {
      dispatch(removeFromCart(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartList);
