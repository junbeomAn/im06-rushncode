import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <div className="header">
    <NavLink exact to="/" className="item" activeClassName="active">
      러시앤코드
    </NavLink>
    <NavLink to="/forum" className="item" activeClassName="active">
      포럼
    </NavLink>
    <NavLink to="/question" className="item" activeClassName="active">
      질문
    </NavLink>
    <NavLink to="/tag" className="item" activeClassName="active">
      태그
    </NavLink>
    <NavLink to="/rank" className="item" activeClassName="active">
      랭크
    </NavLink>
    <NavLink to="/job" className="item" activeClassName="active">
      채용정보
    </NavLink>
    <NavLink to="/auth" className="item" activeClassName="active">
      로그인
    </NavLink>
  </div>
);

export default Header;
