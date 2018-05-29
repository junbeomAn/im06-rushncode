import React from 'react';

const NoSearchResult = () => (
  <div className="no-result-container">
    <h1 className="no-result-title">러시앤코드</h1><br /><br /><br />
    <h1 className="no-result-text">
      <span className="no-result-keyword">&rsquo;{ decodeURI(window.location.href).split('?q=')[1]}&rsquo;</span>&nbsp;에 대한 검색 결과가 없습니다.
    </h1>
  </div>
);

export default NoSearchResult;
