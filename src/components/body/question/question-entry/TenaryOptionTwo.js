import React from 'react';

const TenaryOptionTwo = ({
  cID, rID, deleteChAnswer, deleteReply,
}) => (
  <span className="ternary-option targeting">
    <span className="ternary-option-middot">&middot;</span>
    <span className="reply-top-right">
      <span
        className="delete"
        onClick={() => {
          console.log(cID);
          console.log(rID);
          if (cID) deleteChAnswer(cID);
          else if (rID) deleteReply(rID);
        }}
      >
        삭제
      </span>
    </span>
  </span>
);

export default TenaryOptionTwo;
