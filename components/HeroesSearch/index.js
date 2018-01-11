import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { saveHeroName, getHeroes } from '../../actions';
import { selectQueryHeroName, selectQueryHeroes } from '../../selectors';

const KEYUP_RELEASE_TIMEOUT = 500;

class HeroesSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      typingTimer: null
    };
  }

  handleKeyUpRelease(e) {
    /*
      only dispatch action getHeroes after
      an amount of time since user stopped typing
    */
    const name = e.target.value;
    this.props.saveHeroName(name);
    clearTimeout(this.state.typingTimer);
    this.setState({
      typingTimer: setTimeout(
        () => this.props.getHeroes(),
        KEYUP_RELEASE_TIMEOUT
      )
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter a hero's name..."
          value={this.props.queryHeroName}
          onChange={(e) => this.handleKeyUpRelease(e)}
        />
        <ul>
          {this.props.queryHeroes.map((hero, i) => {
            return (
              <li key={i}>{hero}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    queryHeroName: selectQueryHeroName(state),
    queryHeroes: selectQueryHeroes(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveHeroName: function(name) {
      dispatch(saveHeroName(name));
      // dispatch(getHeroes());
    },
    getHeroes: function() {
      dispatch(getHeroes());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroesSearch);
