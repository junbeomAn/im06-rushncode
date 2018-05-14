import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/css/Header.css';
import Verify from '../../components/body/Verify';

const HeaderContainer = () => (
  // Verify()
  <nav className="navbar navbar-expand-lg navbar-light bg-dark Header">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <span className="navbar-brand title">
        <NavLink exact to="/">
          <h1>러시앤코드</h1>
        </NavLink>
      </span>
      <div className="collapse navbar-collapse itembox" id="navbarSupportedContent">
        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item">
            <NavLink to={Verify() ? '/forum' : '/auth'} className="item">
              포럼
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/question" className="item">
              질문
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/tag" className="item">
              태그
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/rank" className="item">
              랭크
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/job" className="item">
              채용정보
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/auth" className="item">
              로그인
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default HeaderContainer;
