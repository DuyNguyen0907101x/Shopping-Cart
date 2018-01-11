import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { selectHelloMsg } from '../../selectors';
import { sayHello } from '../../actions';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'Default message'
    };
  }

  onChangeHelloMsg(e) {
    const { value: msg } = e.target;
    this.setState({ msg });
  }

  render() {
    const msg = this.props.helloMsg
      ? (
        <p>
          Message:
          <span style={{ color: 'green' }}>&nbsp;{this.props.helloMsg}</span>
        </p>
      )
      : null;
    return (
      <div>
        <input
          type="text"
          value={this.state.msg}
          onChange={(e) => this.onChangeHelloMsg(e)}
        />
        <button
          onClick={() => this.props.sayHello(this.state.msg)}
        >Say Hello</button>
        {msg}
      </div>
    )
  }
}

Hello.propTypes = {
  helloMsg: PropTypes.string,
  sayHello: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    helloMsg: selectHelloMsg(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sayHello: function(msg) {
      dispatch(sayHello(msg));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello);
