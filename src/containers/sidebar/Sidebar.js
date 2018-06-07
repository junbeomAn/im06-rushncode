import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { Verify, SignOut } from './../../redux/actions/verifyAction';

class Sidebar extends Component {
  state = {};

  // handleMenuButtonClick = () => {
  //   this.setState({
  //     sidebarOpen: !this.state.sidebarOpen,
  //   });
  // }
  componentDidMount() {
    this.props.Verify();
  }

  render() {
    const { sidebarClassName, sidebarCloseBtn, closeMenuButtonClick } = this.props;
    const { isLoggedIn, userID, SignOut } = this.props;
    console.log(isLoggedIn);
    // const { sidebarOpen } = this.state;
    // const inactiveClass = ['item-text'];
    // const activeClass = ['item-text', 'active'];
    // const sidebarClassName = !sidebarOpen ? 'home-side-menu open' : 'home-side-menu';
    return (
      <div className={sidebarClassName}>
        <div className="side-upper">
          <NavLink to="/" className="sidebar-go-home" onClick={closeMenuButtonClick}>
            러시앤코드
          </NavLink>
          <Icon
            size="big"
            name="close"
            className={sidebarCloseBtn}
            onClick={closeMenuButtonClick}
          />
        </div>
        <NavLink to="/question" className="side-item" onClick={closeMenuButtonClick}>
          <span className="item-text active">질문</span>
        </NavLink>
        <NavLink to="/tag" className="side-item" onClick={closeMenuButtonClick}>
          <span className="item-text">태그</span>
        </NavLink>
        {isLoggedIn &&
        <NavLink to={`/mypage/${userID}`} className="side-item" onClick={closeMenuButtonClick}>
          <span className="item-text">프로필</span>
        </NavLink>}
        <NavLink to="/rank" className="side-item" onClick={closeMenuButtonClick}>
          <span className="item-text">랭킹</span>
        </NavLink>
        {!isLoggedIn ? (
          <NavLink to="/auth/signin" className="side-item" onClick={closeMenuButtonClick}>
            <span className="item-text">로그인</span>
          </NavLink>
        ) : (
          <NavLink to="/auth/signin" onClick={() => { SignOut(); closeMenuButtonClick(); }} className="side-item">
            <span className="item-text">로그아웃</span>
          </NavLink>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { isLoggedIn, userID } = state.verify;
  return { isLoggedIn, userID };
};

export default connect(mapStateToProps, { Verify, SignOut })(Sidebar);
