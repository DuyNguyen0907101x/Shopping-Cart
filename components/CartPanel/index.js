import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import CartList from '../CartList';
import { checkout } from '../../actions';
import {
  selectTotal,
  selectCheckoutError,
  selectCheckoutPending
} from '../../selectors';

const CartPanel = ({
  total,
  checkoutPending,
  checkoutError,
  onCheckoutClick
}) => {
  const error = checkoutError
    ? (<p style={{ color: 'red' }}>{checkoutError}</p>)
    : null;

  return (
    <div>
      <CartList />
      <p>Total: ${total}</p>
      {error}
      <button
        disabled={parseInt(total) == 0 || checkoutPending}
        onClick={onCheckoutClick}
      >Checkout</button>
    </div>
  );
};

CartPanel.propTypes = {
  total: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  checkoutPending: PropTypes.bool,
  onCheckoutClick: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    total: selectTotal(state),
    checkoutPending: selectCheckoutPending(state),
    checkoutError: selectCheckoutError(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCheckoutClick: function() {
      dispatch(checkout());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPanel);
