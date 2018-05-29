import React from 'react';

const NoSearchResult = () => (
  <div className="no-result-container">
    <h1 className="no-result">
      <span className="no-result-keyword">'{ decodeURI(window.location.href).split('?q=')[1]}'</span>&nbsp;에 대한 검색 결과가 없습니다.
    </h1>
  </div>
);

export default NoSearchResult;
