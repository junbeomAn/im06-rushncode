import React from 'react';
import ReactMarkDown from 'react-markdown';
import '../../../styles/css/QuestionEntry.css';
import {
  QuestionAnswer,
  LikeCount,
  ViewCount,
  Reward,
  UpdateTime,
  Writer,
  Reply,
} from './question-entry';
import { Tags } from '../question/question-list';
import QuestionEntryShowcase from '../../showcases/QuestionEntryShowcase';

const QuestionEntry = ({
  username,
  title,
  qBody,
  qGood,
  qView,
  qReward,
  qTime,
  raiseLikeCount,
  replies,
  answers,
  qID,
  postQuestionReply,
  postAnswerReply,
}) => {
  console.log('타이틀 : ', qBody.replace(/(?:\r↵|\r|↵)/g, '\n'));
  answers = answers || [];
  return (
    <div>
      <QuestionEntryShowcase />
      <div className="QuestionEntryHeader">
        <div className="QuestionEntryHeaderTop">
          <h1>{title}</h1>
        </div>
        <Tags tags={['javascript', 'c', 'java']} />
      </div>

      <div className="QuestionEntryMain">
        <div className="QuestionEntryMainFirst">
          <LikeCount count={qGood} raiseLikeCount={raiseLikeCount} />
        </div>
        <div className="QuestionEntryMainSecond">
          <ReactMarkDown source={qBody.replace(/(?:\r↵|\r|↵)/g, '\n')} />
          <div className="QuestionEntryMainSecondReplyTitle">댓글</div>
          <div className="QuestionEntryMainSecondReply">
            {replies.map((reply, index) => (
              <Reply username={reply.username} body={reply.rBody} time={reply.rTime} key={index} />
            ))}
          </div>
          <div className="QuestionEntryAnswerSecondReplyAdd">
            <div className="form-group QuestionEntryAnswerSecondReplyAddInput">
              <label htmlFor="exampleFormControlTextarea1">add a comment</label>
              <textarea
                className="form-control questionReplyBody"
                id="exampleFormControlTextarea1"
                rows="3"
              />
            </div>
            <div className="QuestionEntryAnswerSecondReplyAddBtn">
              <button onClick={() => postQuestionReply(qID)} className="btn btn-primary mb-2">
                확인
              </button>
            </div>
          </div>
        </div>
        <div className="QuestionEntryMainThird">
          <div className="QuestionEntryMainThirdItemBox">
            <ViewCount count={qView} />
          </div>
          <div className="QuestionEntryMainThirdItemBox">
            <Reward reward={qReward} />
          </div>
          <div className="QuestionEntryMainThirdItemBox">
            <UpdateTime time={qTime} />
          </div>
          <div className="QuestionEntryMainThirdItemBox">
            <Writer username={username} />
          </div>
        </div>
      </div>
      <div className="QuestionEntryHeader">
        <div className="QuestionEntryHeaderTop">
          <h1>답변 {answers.length}</h1>
        </div>
      </div>
      <div className="QuestionEntryAnswer">
        {answers.map(answer => (
          <QuestionAnswer
            aID={answer.aID}
            username={answer.username}
            chAnswers={answer.chAnswers}
            count={answer.aGood}
            body={answer.aBody}
            time={answer.aTime}
            raiseLikeCount={raiseLikeCount}
            postAnswerReply={postAnswerReply}
            key={answer.aID}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionEntry;

/* <div className="QuestionEntryAnswer">
  <Answer count={7} raiseLikeCount={raiseLikeCount} />
</div>; */
