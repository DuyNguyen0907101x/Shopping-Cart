import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Immutable, { fromJS } from 'immutable';
import rootReducer from './reducers';
import rootSaga from './sagas';

import App from './components/App';

// config saga middleware
const sagaMiddleware = createSagaMiddleware();
const initialState = Immutable.Map();
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
