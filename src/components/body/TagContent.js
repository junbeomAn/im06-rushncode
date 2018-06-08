import React from 'react';

const TagContent = ({ tags, handleTagClick }) => (
  <div className="tag-content">
    <h2>모든 태그({tags.length}개)</h2>
    <hr />
    <div className="wrapper">
      {tags.map(item => (
        <div className="box">
          <span onClick={() => handleTagClick(`/sort/tag/${item.tag}`)}>{item.tag}</span>
        </div>
      ))}
    </div>
  </div>
);

export default TagContent;
