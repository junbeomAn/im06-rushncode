import React from 'react';
import { Input } from 'semantic-ui-react';

import TagShowcase from '../showcases/TagShowcase';
import TagContent from './TagContent';

const Tag = ({
  valueChange,
  tags,
  tagSearch,
  handleTagClick,
}) => (
  <div className="tag-container">
    <TagShowcase />
    <div className="tag-input-container">
      <Input
        className="tag-search-bar"
        size="huge"
        icon="search"
        onChange={valueChange}
        onKeyPress={e => tagSearch(e)}
        iconPosition="left"
        placeholder="태그 검색"
      />
    </div>
    <TagContent tags={tags} handleTagClick={handleTagClick} />
  </div>
);

export default Tag;
