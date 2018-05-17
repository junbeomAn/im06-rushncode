import React from 'react';
import PropTypes from 'prop-types';

const Tags = ({ tags }) => (
  <div className="tags">
    {tags
      .slice()
      .reverse()
      .map((tag, index) => (
        <button type="button" className="btn btn-outline-secondary questListBtn" key={index}>
          {tag}
        </button>
      ))}
  </div>
);

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
};

export default Tags;
