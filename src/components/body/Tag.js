import React from 'react';
import { Input } from 'semantic-ui-react';
import TagShowcase from '../showcases/TagShowcase';

const Tag = () => (
  <div className="tagContainer">
    <TagShowcase />
    <div className="tagInputContainer">
      <Input placeholder="search tags here. . ." />
    </div>
  </div>
);

export default Tag;
