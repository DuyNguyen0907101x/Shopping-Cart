import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { setFilterType } from '../../actions';
import { selectFilterLinkActive } from '../../selectors';

const FilterLink = ({ filterType, text, active, setFilterType }) => {
  return active
    ? (
      <span>{text}</span>
    )
    : (
      <a href="#" onClick={(e) => {
        e.preventDefault();
        setFilterType();
      }}>{text}</a>
    )
  ;
};

FilterLink.propTypes = {
  filterType: PropTypes.string,
  text: PropTypes.string,
  setFilterType: PropTypes.func
};

const mapStateToProps = (state, ownProps) => {
  return {
    active: selectFilterLinkActive(state, ownProps)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setFilterType: function() {
      dispatch(setFilterType(ownProps.filterType))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink);
