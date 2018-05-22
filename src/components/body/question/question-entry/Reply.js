import React from 'react';
import moment from 'moment';
import { TenaryOptionTwo } from '../question-entry';

const Reply = ({
  myID, userID, cID, rID, username, body, time, deleteChAnswer, deleteReply,
}) => (
  <div className="QuestionEntryAnswerSecondReplyEntry QuestionEntryMainSecondReplyEntry">
    <div className="reply-top">
      <div className="reply-top-left">
        <a className="timeStampReplyName" href={`/mypage/${userID}`}>
          {username}
        </a>
      </div>
      <div className="reply-top-right write-info">
        {moment(time)
          .startOf()
          .fromNow()}
        <span>
          {myID === userID ? (
            <TenaryOptionTwo
              cID={cID}
              rID={rID}
              deleteChAnswer={deleteChAnswer}
              deleteReply={deleteReply}
            />
          ) : null}
        </span>
      </div>
    </div>

    <div className="reply-down">
      <span>{body}</span>
    </div>
  </div>
);

export default Reply;
