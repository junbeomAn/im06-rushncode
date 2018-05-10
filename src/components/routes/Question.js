import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../../styles/css/Question.css';

const Question = ({ posts }) => (
  <div className="Question_main">
    {posts.map(post => (
      <div className="Question" key={post.id}>
        <Link to={`question/${post.id}`} href>
          <h2>{post.title}</h2>
        </Link>
      </div>
    ))}
  </div>
);

Question.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Question;
