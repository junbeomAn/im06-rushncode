import React from 'react';
import { NavLink } from 'react-router-dom';

const TenaryOption = ({
  deleteQuestion,
  deleteAnswer,
  fetchModifyQuestion,
  fetchModifyAnswer,
  qID,
  aID,
}) => (
  <span className="ternary-option targeting">
    <span className="ternary-option-middot">&middot;</span>
    <span className="reply-top-right">
      {qID ? (
        <NavLink to={`/question/write/${qID}`} className="modify">
          <span onClick={() => fetchModifyQuestion(qID)}>수정</span>
        </NavLink>
      ) : (
        <NavLink to={`/question/modify/${aID}`} className="modify">
          <span onClick={() => fetchModifyAnswer(aID)}>수정</span>
        </NavLink>
      )}

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
