import React from 'react';
import PropTypes from 'prop-types';

const Tags = ({ tags }) => (
  <div className="tags">
    {tags.map(tag => (
      <button type="button" className="btn btn-outline-secondary questListBtn">
        {tag}
      </button>
    ))}
  </div>
);

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
};

export default Tags;
