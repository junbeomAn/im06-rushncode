import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const NoSearchResult = () => (
  <div className="no-result-container">
    <div className="emptybox">
      <h1 className="no-result-text">
        입력하신 단어에 대한 검색 결과가 없습니다.
      </h1>
    </div>
    <div className="img-box">
      <div className="no-result-button-cntr">
        <NavLink to="/question/write"><Button size="huge" className="question-in-korean">한글로 질문하기</Button></NavLink>
        <NavLink to="/tag"><Button className="search-by-tag">태그로 검색하기<Icon name="angle right" /></Button></NavLink>
      </div>
    </div>
  </div>
);

export default NoSearchResult;
