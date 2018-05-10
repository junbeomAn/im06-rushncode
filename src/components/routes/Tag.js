import React from 'react';
import { Input } from 'semantic-ui-react';
import '../../styles/css/Tag.css';

const Tag = () => {
  return (
    <div className="tagContainer">
      <div className="tagInputContainer">
        <Input placeholder="search tags here. . ." />
      </div>
      
    </div>
  );
};

export default Tag;
