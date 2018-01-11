import { createSelector } from 'reselect';

export const selectHello = (state) => state.get('helloReducer');

export const selectHelloMsg = createSelector(
  [ selectHello ],
  (hello) => hello.get('msg')
);
