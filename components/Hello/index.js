import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

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
      ? (<p>Message: <span style={{ color: 'green' }}>{this.props.helloMsg}</span></p>)
      : null;
    return (
      <div>
        <input type="text" value={this.state.msg} onChange={(e) => this.onChangeHelloMsg(e)}/>
        <button onClick={() => this.props.sayHello(this.state.msg)}>Say Hello</button>
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
    helloMsg: state.getIn(['helloReducer', 'msg'])
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
