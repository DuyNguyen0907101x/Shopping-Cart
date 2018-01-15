import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

export const selectProductsByIds = (state) => state
  .getIn(['productsReducer', 'byIds']);

export const selectAllProducts = () => createSelector(
  selectProductsByIds,
  byIds => byIds
    .keySeq()
    .toList()
    .map(id => byIds.get(id))
);
