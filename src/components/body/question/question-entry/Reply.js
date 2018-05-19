import React from 'react';
import moment from 'moment';

const Reply = ({ username, body, time }) => (
  <div className="QuestionEntryAnswerSecondReplyEntry QuestionEntryMainSecondReplyEntry">
    <span>{body}</span>
    <span className="timeStampReply">
      <span className="timeStampReplyName">{username}</span>
      <span className="timeStampReplyDot">&middot;</span>
      {moment(time)
        .startOf()
        .fromNow()}
    </span>
  </div>
);

export default Reply;
