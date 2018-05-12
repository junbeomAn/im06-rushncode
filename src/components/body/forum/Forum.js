import React from 'react';
import PropTypes from 'prop-types';

// import '../../../styles/css/QuestList.css';

const Forum = ({ title, body }) => (
  <div>
    <h1>{title}</h1>
    <p>{body}</p>
  </div>
);

Forum.propTypes = {
  posts: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Forum;
