import React from 'react';
import PropTypes from 'prop-types';

const AnswerCount = ({ count }) => <div>답변수 {count}</div>;

AnswerCount.propTypes = {
  count: PropTypes.number.isRequired,
};

export default AnswerCount;
