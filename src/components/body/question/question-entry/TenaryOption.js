import React from 'react';

const TenaryOption = () => (
  <span className="ternary-option">
    <span className="ternary-option-middot">&middot;</span>
    <span className="reply-top-right">
      <span className="modify" onClick={() => console.log('modify')}>
        수정
      </span>
      <span className="reply-divider"> | </span>
      <span className="delete" onClick={() => console.log('delete')}>
        삭제
      </span>
    </span>
  </span>
);

export default TenaryOption;
