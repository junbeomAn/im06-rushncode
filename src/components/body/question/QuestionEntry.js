import React from 'react';
import PropTypes from 'prop-types';
// import { convertFromRaw } from 'draft-js';
import ReactMarkDown from 'react-markdown';
import '../../../styles/css/QuestionEntry.css';
import { QuestionAnswer, LikeCount, ViewCount, Reward, UpdateTime, Writer } from './question-entry';
import { Tags } from '../question/question-list';
import QuestionEntryShowcase from '../../showcases/QuestionEntryShowcase';

const QuestionEntry = ({
  title, qBody, qGood, qView, qReward, qTime, raiseLikeCount,
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
        <QuestionAnswer count={7} raiseLikeCount={raiseLikeCount} />
        <QuestionAnswer count={7} raiseLikeCount={raiseLikeCount} />
        <QuestionAnswer count={7} raiseLikeCount={raiseLikeCount} />
      </div>
    </div>
  );
};

QuestionEntry.propTypes = {
  title: PropTypes.string.isRequired,
  qBody: PropTypes.string.isRequired,
  qGood: PropTypes.number.isRequired,
  qView: PropTypes.number.isRequired,
  qReward: PropTypes.number.isRequired,
  qTime: PropTypes.string.isRequired,
  raiseLikeCount: PropTypes.func.isRequired,
};

export default QuestionEntry;

/* <div className="QuestionEntryAnswer">
  <Answer count={7} raiseLikeCount={raiseLikeCount} />
</div>; */
