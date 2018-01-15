import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { toJS } from '../../utils/HOC';

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

  console.log('re-render')

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

const mapStateToProps = createStructuredSelector({
  total: selectTotal(),
  checkoutPending: selectCheckoutPending(),
  checkoutError: selectCheckoutError()
});

const mapDispatchToProps = (dispatch) => ({
  onCheckoutClick: function() {
    dispatch(checkout());
  }
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const ComponentWithJSProps = toJS(CartPanel);

export default compose(withConnect)(ComponentWithJSProps);
