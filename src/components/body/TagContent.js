import React from 'react';

const TagContent = ({ tags }) => (
  <div className="tag-content">
    <h2>모든 태그({tags.length}개)</h2>
    <hr />
    <div className="wrapper">
      {tags.map(item => (
        <div className="box">
          <a href={`/sort/tag/${item.tag}`} without="true">
            {item.tag}
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default TagContent;

