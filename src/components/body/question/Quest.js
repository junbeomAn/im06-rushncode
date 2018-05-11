import React from 'react';
import PropTypes from 'prop-types';

import '../../../styles/css/Question.css';

const Quest = ({ title, body }) => (
  <div>
    <h1>{title}</h1>
    <p>{body}</p>
  </div>
);

Quest.propTypes = {
  posts: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Quest;
