import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../../../styles/css/Question.css';

const QuestList = ({ posts }) => {
  const post = posts.map(item => (
    <div className="Question" key={item.id}>
      <Link to={`question/${item.id}`} href>
        <h2>{item.title}</h2>
      </Link>
      <p>{item.body}</p>
    </div>
  ));
  return <div className="QuestionMain">{post}</div>;
};

QuestList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default QuestList;
