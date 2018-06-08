import React from 'react';
import { Input, Button } from 'semantic-ui-react';

const HomeShowcase = ({ handleValueChange, handleSearch, handleGoAskClick }) => (
  <div className="homeUpper">
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
