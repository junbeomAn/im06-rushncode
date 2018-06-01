import React from 'react';
// import { NavLink } from 'react-router-dom';
// import WriteButton from './../../containers/showcase/writeButton';
import BrowserCheckSign from '../../browsercheck/sign';
import { isChrome } from '../../browsercheck';

const HomeShowcase = () => (
  <div className="homeUpper">
    {!isChrome && <BrowserCheckSign />}
    <div className="jumbotron HomeJumbotron">
      {/* <span className="homeLBtn">
        <WriteButton />
      </span>
      <span className="homeRBtn">
        <NavLink to="/auth/signup" className="item">
          <button type="button" className="btn btn-outline-light btn-lg">
            회원가입
          </button>
        </NavLink>
      </span> */}
    </div>
  </div>
);

export default HomeShowcase;
