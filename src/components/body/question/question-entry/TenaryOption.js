import React from 'react';
import { NavLink } from 'react-router-dom';

const TenaryOption = ({
  deleteQuestion, deleteAnswer, fetchModifyQuestion, qID, aID,
}) => (
  <span className="ternary-option targeting">
    <span className="ternary-option-middot">&middot;</span>
    <span className="reply-top-right">
      <NavLink to="/question/write" className="modify">
        <span onClick={() => fetchModifyQuestion(qID)}>수정</span>
      </NavLink>
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
