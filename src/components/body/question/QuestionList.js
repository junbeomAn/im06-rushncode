import React from 'react';
import PropTypes from 'prop-types';

import { EachQuestion, Pagenation } from './question-list';
import '../../../styles/css/QuestionList.css';
import QuestionListShowcase from '../../showcases/QuestionListShowcase';

const QuestionList = ({ posts }) => (
  <div className="questContainer">
    <QuestionListShowcase />
    <div className="questionMain">
      <EachQuestion questions={posts} />
      <Pagenation />
    </div>
  </div>
);

QuestionList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default QuestionList;
