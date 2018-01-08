export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CHECKOUT = 'CHECKOUT';
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS';
export const CHECKOUT_FAILURE = 'CHECKOUT_FAILURE';
export const SAY_HELLO = 'SAY_HELLO';

export const sayHello = (msg) => ({
  type: SAY_HELLO,
  msg
});


export const getAllProducts = () => ({
  type: GET_ALL_PRODUCTS
});

export const receiveProducts = (products) => ({
  type: RECEIVE_PRODUCTS,
  products
});

export const addToCart = (id) => ({
  type: ADD_TO_CART,
  id
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  id
});

export const checkout = (cart) => ({
  type: CHECKOUT,
  cart
});

export const checkoutSuccess = (cart) => ({
  type: CHECKOUT_SUCCESS,
  cart
});

export const checkoutFailure = (error) => ({
  type: CHECKOUT_FAILURE,
  error
});
