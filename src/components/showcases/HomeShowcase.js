import React from 'react';
// import { NavLink } from 'react-router-dom';
import { Input } from 'semantic-ui-react';
// import WriteButton from './../../containers/showcase/writeButton';
import BrowserCheckSign from '../../browsercheck/sign';
import { isChrome } from '../../browsercheck';

const HomeShowcase = ({ handleValueChange, handleSearch }) => (
  <div className="homeUpper">
    <Input
      className="home-search-bar"
      size="huge"
      icon="search"
      onChange={handleValueChange}
      onKeyPress={e => handleSearch(e)}
      placeholder="검색어를 입력하세요"
    />
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
