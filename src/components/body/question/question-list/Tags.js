import React from 'react';

const Tags = ({ tags }) => (
  <div className="tags">
    {tags.map((tag, index) => (
      <button
        type="button"
        className="btn btn-outline-secondary questListBtn"
        key={`questListBtn-${index * 10}`}
      >
        <a href={`/question/${tag}`}>{tag}</a>
      </button>
    ))}
  </div>
);
export default Tags;
