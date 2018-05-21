import React from 'react';
import moment from 'moment';
import { Reply, TenaryOption } from '../question-entry';

const Answer = ({
  aID, body, time, chAnswers, postAnswerReply,
}) => (
  <div className="QuestionEntryAnswerSecondAnswerBox">
    <div className="QuestionEntryAnswerSecondAnswerEntry">
      {body}
      <div className="write-info">
        {moment(time)
          .startOf()
          .fromNow()}에 작성 되었습니다
        <TenaryOption />
      </div>
      <div className="QuestionEntryAnswerSecondReplyTitle">댓글</div>
      <div className="QuestionEntryAnswerSecondReply">
        {chAnswers.map(reply => (
          <Reply username={reply.username} body={reply.cBody} time={reply.cTime} key={reply.cID} />
        ))}
      </div>
      <div className="QuestionEntryAnswerSecondReplyAdd">
        <div className="form-group QuestionEntryAnswerSecondReplyAddInput">
          <label htmlFor="exampleFormControlTextarea1">add a comment</label>
          <textarea
            className={`form-control answerReplyBody${aID}`}
            id="exampleFormControlTextarea1"
            rows="3"
          />
        </div>
        <div className="QuestionEntryAnswerSecondReplyAddBtn">
          <button onClick={() => postAnswerReply(aID)} className="btn btn-primary mb-2">
            확인
          </button>
        </div>
      </div>
    </div>
  </div>
);
export default Answer;
