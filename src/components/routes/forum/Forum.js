import React from 'react';
import PropTypes from 'prop-types';
import './Forum.css';

const Forum = ({ data }) => (
  <div>
    {data.map(item => (
      <div>
        <h2>{item.title}</h2>
        <p>{item.body}</p>
      </div>
    ))}
  </div>
);

Forum.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Forum;
