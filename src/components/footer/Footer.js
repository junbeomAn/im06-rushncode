import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/css/Footer.css';

const Footer = () => (
  <div className="footer">
    <span className="footerItem footerLeft"> &copy; 러시앤코드 </span>
    <span className="footerRight">
      <NavLink to="/clause" className="footerItem" activeClassName="active">
        이용약관
      </NavLink>
      <NavLink to="/information" className="footerItem" activeClassName="active">
        개인정보보호
      </NavLink>
      <NavLink to="/helpdesk" className="footerItem" activeClassName="active">
        헬프데스크
      </NavLink>
    </span>
  </div>
);

export default Footer;
