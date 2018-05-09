import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/css/Footer.css';

const Footer = () => (
  <div className="footer">
    <span className="foot_item left"> &copy; 러시앤코드 </span>
    <span className="right">
      <NavLink to="/clause" className="foot_item" activeClassName="active">
        이용약관
      </NavLink>
      <NavLink to="/information" className="foot_item" activeClassName="active">
        개인정보보호
      </NavLink>
      <NavLink to="/helpdesk" className="foot_item" activeClassName="active">
        헬프데스크
      </NavLink>
    </span>
  </div>
);

export default Footer;
