import React from 'react';

const Tags = ({ tags, fetchSortedByTag, currentPage }) => (
  <div className="tags">
    {tags.map((tag, index) => (
      <button
        type="button"
        className="btn btn-outline-secondary questListBtn"
        key={`questListBtn-${index * 10}`}
        onClick={() => fetchSortedByTag(tag, (currentPage = 1))}
      >
        {tag}
      </button>
    ))}
  </div>
);
export default Tags;
