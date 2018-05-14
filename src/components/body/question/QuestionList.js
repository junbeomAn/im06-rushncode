import React from 'react';
import PropTypes from 'prop-types';

import { EachQuestion, Pagenation, Showcase } from './question-list';
import '../../../styles/css/QuestionList.css';

const QuestionList = ({ posts }) => (
  <div className="questContainer">
    <Showcase />
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
