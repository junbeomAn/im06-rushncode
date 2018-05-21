import React from 'react';
import moment from 'moment';
import { TenaryOption } from '../question-entry';

const Reply = ({ userID, username, body, time }) => (
  <div className="QuestionEntryAnswerSecondReplyEntry QuestionEntryMainSecondReplyEntry">
    <div className="reply-top">
      <div className="reply-top-left">
        <a
          className="timeStampReplyName"
          href={`/mypage/${username}`}
          onClick={() => console.log('username')}
        >
          {username}
        </a>
      </div>
      <div className="reply-top-right write-info">
        {moment(time)
          .startOf()
          .fromNow()}
        <TenaryOption />
      </div>
    </div>

    <div className="reply-down">
      <span>{body}</span>
    </div>
  </div>
);

export default Reply;
