import React from 'react';
import ReactMarkDown from 'react-markdown';
import '../../../styles/css/QuestionEntry.css';
import { QuestionAnswer, LikeCount, ViewCount, Reward, UpdateTime, Writer, Reply } from './question-entry';
import { Tags } from '../question/question-list';
import QuestionEntryShowcase from '../../showcases/QuestionEntryShowcase';

const QuestionEntry = ({
  title, qBody, qGood, qView, qReward, qTime, raiseLikeCount, replies, qID, postQuestionReply, postAnswerReply,
}) => {
  console.log('타이틀 : ', qBody.replace(/(?:\r↵|\r|↵)/g, '\n'));
  // console.log('그냥 파싱 된 것', JSON.parse(qBody));
  // console.log('convertFromRaw 파싱 된 것', convertFromRaw(JSON.parse(qBody)));
  // console.log('파싱', JSON.parse(qBody));
  return (
    <div className="QuestionEntryContainer">
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
          <ReactMarkDown source={qBody.replace(/(?:\r↵|\r|↵)/g, '\n')}/>
          <div className="QuestionEntryMainSecondReplyTitle">댓글</div>
          <div className="QuestionEntryMainSecondReply">
            {replies.map((reply, index) => (
              <Reply body={reply.rBody} time={reply.rTime} key={index} />
            ))}
          </div>
          <div className="QuestionEntryAnswerSecondReplyAdd">
            <div className="form-group QuestionEntryAnswerSecondReplyAddInput">
              <label htmlFor="exampleFormControlTextarea1">add a comment</label>
              <textarea className="form-control questionReplyBody" id="exampleFormControlTextarea1" rows="3" />
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
            <Writer />
          </div>
        </div>
      </div>
      <div className="QuestionEntryHeader">
        <div className="QuestionEntryHeaderTop">
          <h1>답변 [갯수]</h1>
        </div>
      </div>
      <div className="QuestionEntryAnswer">
        <QuestionAnswer count={7} raiseLikeCount={raiseLikeCount} postAnswerReply={postAnswerReply} />
        <QuestionAnswer count={7} raiseLikeCount={raiseLikeCount} postAnswerReply={postAnswerReply} />
        <QuestionAnswer count={7} raiseLikeCount={raiseLikeCount} postAnswerReply={postAnswerReply} />
      </div>
    </div>
  );
}

export default QuestionEntry;

/* <div className="QuestionEntryAnswer">
  <Answer count={7} raiseLikeCount={raiseLikeCount} />
</div>; */
