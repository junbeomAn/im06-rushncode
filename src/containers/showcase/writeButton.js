import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Verify } from './../../redux/actions/verifyAction';
import { initWriteForm } from './../../redux/actions/questionAction';

class WriteButton extends Component {
  state = {};

  render() {
    // console.log(this.props.isLoggedIn);
    const path = this.props.isLoggedIn ? '/question/write' : '/auth/signin';
    return (
      <NavLink to={path} className="item">
        <button
          type="button"
          onClick={() =>
            (!this.props.isLoggedIn
              ? alert('로그인이 필요한 서비스입니다.')
              : this.props.initWriteForm())
          }
          className="btn btn-outline-light btn-lg ask-btn"
        >
          한글로 질문하기
        </button>
      </NavLink>
    );
  }
}
const mapStateToProps = (state) => {
  const { isLoggedIn } = state.verify;
  return { isLoggedIn };
};

export default connect(mapStateToProps, { Verify, initWriteForm })(WriteButton);
