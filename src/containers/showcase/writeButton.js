import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Verify } from './../../redux/actions/verifyAction';

class WriteButton extends Component {
  state = {};

  render() {
    // console.log(this.props.isLoggedIn);
    const path = this.props.isLoggedIn ? '/question/write' : '/auth/signin';
    return (
      <NavLink to={path} className="item">
        <button type="button" onClick={() => { !this.props.isLoggedIn && alert('login is required!'); }} className="btn btn-outline-light btn-lg">
          질문하기
        </button>
      </NavLink>
    );
  }
}
const mapStateToProps = (state) => {
  const { isLoggedIn } = state.verify;
  return { isLoggedIn };
};

export default connect(mapStateToProps, { Verify })(WriteButton);

