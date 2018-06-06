import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component {
  state = {
  };


  // handleMenuButtonClick = () => {
  //   this.setState({
  //     sidebarOpen: !this.state.sidebarOpen,
  //   });
  // }

  render() {
    const { sidebarClassName, sidebarCloseBtn, closeMenuButtonClick } = this.props;
    
    // const { sidebarOpen } = this.state;
    // const inactiveClass = ['item-text'];
    // const activeClass = ['item-text', 'active'];
    // const sidebarClassName = !sidebarOpen ? 'home-side-menu open' : 'home-side-menu';
    return (
      <div className={sidebarClassName}>
        <div className="side-upper">
          <NavLink to="/" className="sidebar-go-home">
            러시앤코드
          </NavLink>
          <Icon size="big" name="close" className={sidebarCloseBtn} onClick={closeMenuButtonClick} />
        </div>
        <a href="/question" className="side-item"><span className="item-text active">질문</span></a>
        <a href="/tag" className="side-item"><span className="item-text">태그</span></a>
        <a href="/mypage" className="side-item"><span className="item-text">프로필</span></a>
        <a href="/rank" className="side-item"><span className="item-text">랭킹</span></a>
        <a href="/auth/signin" className="side-item"><span className="item-text">로그인/로그아웃</span></a>
      </div>
    );
  }
}

export default Sidebar;

