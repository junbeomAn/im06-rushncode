import React from 'react';
import PropTypes from 'prop-types';
import '../../../styles/css/QuestionEntry.css';
import { Showcase, Answer, LikeCount, ViewCount, Reward, UpdateTime } from './question-entry';
import { Tags } from '../question/question-list';

const QuestionEntry = ({
  title, qBody, qGood, qView, qReward, qTime, raiseLikeCount,
}) => (
  <div className="QuestionEntryContainer">
    <Showcase />
    <div className="QuestionEntryQuestion">
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
        <div className="QuestionEntryMainSecond">{qBody}</div>
        <div className="QuestionEntryMainThird">
          <div className="QuestionEntryMainThirdViewCount">
            <ViewCount count={qView} />
          </div>
          <div className="QuestionEntryMainThirdReward">
            <Reward reward={qReward} />
          </div>
          <div className="QuestionEntryMainThirdReward">
            <UpdateTime time={qTime} />
          </div>
        </div>
      </div>

      <div className="QuestionEntryMain">
        <div className="QuestionEntryMainFirst">
          <LikeCount count={0} />
        </div>
        <div className="QuestionEntryMainSecond">
          <Answer />
        </div>
        <div className="QuestionEntryMainThird">
          <div> Add component </div>
        </div>
      </div>
    </div>
  </div>
);

QuestionEntry.propTypes = {
  title: PropTypes.string.isRequired,
  qBody: PropTypes.string.isRequired,
  qGood: PropTypes.number.isRequired,
  qView: PropTypes.number.isRequired,
  qReward: PropTypes.number.isRequired,
  qTime: PropTypes.string.isRequired,
  qId: PropTypes.number.isRequired,
};

export default QuestionEntry;
