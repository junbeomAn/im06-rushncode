import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <div className="header">
    <NavLink exact to="/" className="item" activeClassName="active">
      Rush & Code
    </NavLink>
    <NavLink to="/forum" className="item" activeClassName="active">
      Forum
    </NavLink>
    <NavLink to="/question" className="item" activeClassName="active">
      Question
    </NavLink>
    <NavLink to="/tag" className="item" activeClassName="active">
      Tags
    </NavLink>
    <NavLink to="/rank" className="item" activeClassName="active">
      Ranks
    </NavLink>
    <NavLink to="/job" className="item" activeClassName="active">
      Job-Info
    </NavLink>
    <NavLink to="/auth" className="item" activeClassName="active">
      Auth
    </NavLink>
  </div>
);

export default Header;
