import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../styles/css/Question.css';

const Question = ({ data }) => (
  <div className="Container">
    {data.map(item => (
      <div className="Question">
        <Link to={`question/${item.id}`} href>
          <h2>{item.title}</h2>
        </Link>
        <p>{item.body}</p>
      </div>
      ))}
  </div>
);

Question.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Question;
