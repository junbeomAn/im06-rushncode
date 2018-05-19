import React from 'react';
import moment from 'moment';

const Reply = ({ body, time }) => (
  <div className="QuestionEntryAnswerSecondReplyEntry QuestionEntryMainSecondReplyEntry">
    <span>{body}</span>
    <span>
      [
      {moment(time)
        .startOf()
        .fromNow()}]
    </span>
  </div>
);

export default Reply;
