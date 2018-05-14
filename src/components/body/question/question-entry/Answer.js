import React from 'react';
import { Reple } from '../question-entry';
import '../../../../styles/css/QuestionAnswer.css';

const Answer = () => (
  <div className="QuestionAnswerContainer">
    <div className="QuestionAnswerAnswer">Answer Component</div>
    <div className="QuestionAnswerReple">
      <Reple />
    </div>
  </div>
);
export default Answer;
