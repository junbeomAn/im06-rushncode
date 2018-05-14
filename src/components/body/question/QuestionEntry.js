import React from 'react';
import PropTypes from 'prop-types';
import '../../../styles/css/QuestionEntry.css';
import { Showcase, Answer } from './question-entry';
import { Tags, LikeCount, Reward, ViewCount } from '../question/question-list';

const QuestionEntry = ({ title, body }) => (
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
          <LikeCount count={0} />
        </div>
        <div className="QuestionEntryMainSecond">{body}</div>
        <div className="QuestionEntryMainThird">
          <div>
            <ViewCount count={0} />
          </div>
          <Reward reward="20000" />
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
  title: PropTypes.string,
  body: PropTypes.string,
};

export default QuestionEntry;
