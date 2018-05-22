import React from 'react';

const TenaryOption = ({ deleteQuestion, deleteAnswer, aID }) => (
  <span className="ternary-option targeting">
    <span className="ternary-option-middot">&middot;</span>
    <span className="reply-top-right">
      <span className="modify" onClick={() => console.log('modify')}>
        수정
      </span>
      <span className="reply-divider"> | </span>
      <span
        className="delete"
        onClick={() => {
          if (deleteQuestion) deleteQuestion();
          else if (deleteAnswer) deleteAnswer(aID);
        }}
      >
        삭제
      </span>
    </span>
  </span>
);

export default TenaryOption;
