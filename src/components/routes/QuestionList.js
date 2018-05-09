import React from 'react';
import PropTypes from 'prop-types';

const QuestionList = ({ match }) => (
  <div>
    <span>{match.params.id}</span>
    번 페이지 입니다.
  </div>
);

QuestionList.propTypes = {
  match: PropTypes.object.isRequired,
};
export default QuestionList;
