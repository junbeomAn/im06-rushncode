import React from 'react';
// import { NavLink } from 'react-router-dom';
import { Input, Button } from 'semantic-ui-react';
// import WriteButton from './../../containers/showcase/writeButton';
import BrowserCheckSign from '../../browsercheck/sign';
import { isChrome, isMobile } from '../../browsercheck';

const HomeShowcase = ({ handleValueChange, handleSearch, handleGoAskClick }) => (
  <div className="homeUpper">
    {/* {(!isChrome && !isMobile) && <BrowserCheckSign />} */}
    <div className="top">
      <div className="left" />
      <div className="right">
        <Button className="home-search-btn" onClick={handleGoAskClick}>
          한글로 질문하기
        </Button>
      </div>
    </div>
    <div className="bot">
      <Input
        className="home-search-bar"
        size="huge"
        icon="search"
        onChange={handleValueChange}
        onKeyPress={e => handleSearch(e)}
        placeholder="검색어를 입력하세요"
      />
    </div>
  </div>
);

export default HomeShowcase;
