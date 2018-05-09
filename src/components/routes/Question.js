import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import '../../styles/css/Question.css';

const Question = ({ data }) => (
  <div className="Container">
    {data.map(item => (
      <div className="Question">
        <h2>{item.title}</h2>
        <p>{item.body}</p>
        <Button className="button">click here</Button>
      </div>
    ))}
  </div>
);

Question.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Question;
