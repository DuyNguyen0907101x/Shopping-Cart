export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';

export const getAllProducts = () => ({
  type: GET_ALL_PRODUCTS
});

export const receiveProducts = (products) => ({
  type: RECEIVE_PRODUCTS,
  products
});
