import React from 'react';
import { NavLink } from 'react-router-dom';
import { Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../../styles/css/Header.css';

const Headers = () => (
  <div className="header">
    <Header as="h2" textAlign="justified" className="header" dividing>
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
    </Header>
  </div>
);

export default Headers;
