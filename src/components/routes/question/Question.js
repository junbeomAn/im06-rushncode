import React from 'react';
import PropTypes from 'prop-types';
import './Question.css';

const Question = ({ data }) => (
  <div>
    {data.map(item => (
      <div className="Question">
        <h2>{item.title}</h2>
        <p>{item.body}</p>
      </div>
    ))}
  </div>
);

Question.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Question;
