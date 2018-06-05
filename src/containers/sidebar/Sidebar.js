import React, { Component } from 'react';
import { Icon, Button } from 'semantic-ui-react';

class Sidebar extends Component {
  state = {};

  render() {
    return (
      <div>
        <Button icon className="sidebar-btn">
          <Icon name="sidebar" />
        </Button>
        <div className="home-side-menu">
          <div className="side-upper">
            러시앤코드
          </div>
          <a href="/question"><span className="item-text active">질문</span></a>
          <a href="/tag"><span className="item-text">태그</span></a>
          <a href="/mypage"><span className="item-text">프로필</span></a>
          <a href="/rank"><span className="item-text">랭킹</span></a>
          <a href="/auth/signin"><span className="item-text">로그인/로그아웃</span></a>
        </div>
      </div>
    );
  }
}

export default Sidebar;

