import React from 'react';
import PropTypes from 'prop-types';

import { EachQuestion, Pagenation } from './question-list';
import '../../../styles/css/QuestionList.css';
import QuestionListShowcase from '../../showcases/QuestionListShowcase';

// require('bootstrap/less/bootstrap.less');

const QuestionList = ({
  posts,
  updateStartEndPage,
  makeAsync,
  currentPage,
  start,
  end,
}) => (
  <div className="questContainer">
    <QuestionListShowcase />
    <div className="questionMain">
      <EachQuestion questions={posts} />
      <Pagenation
        updateStartEndPage={updateStartEndPage}
        makeAsync={makeAsync}
        count={posts[0].countQuestions}
        currentPage={currentPage}
        start={start}
        end={end}
      />
    </div>
  </div>
);

QuestionList.propTypes = {
  updateStartEndPage: PropTypes.func.isRequired,
  makeAsync: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  posts: PropTypes.array.isRequired,
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
};

export default QuestionList;
