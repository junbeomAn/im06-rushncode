import React from 'react';
import { EachQuestion, Pagenation } from './question-list';
import QuestionListShowcase from '../../showcases/QuestionListShowcase';

// require('bootstrap/less/bootstrap.less');

const QuestionList = ({
  posts,
  updateStartEndPage,
  makeAsync,
  currentPage,
  start,
  end,
  changeState,
}) => (
  <div className="questContainer">
    <QuestionListShowcase />
    <div className="questionMain">
      <div className="question-box">
        <EachQuestion questions={posts} currentPage={currentPage} changeState={changeState} />
      </div>
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

export default QuestionList;
