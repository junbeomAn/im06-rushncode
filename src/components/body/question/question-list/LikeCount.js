import React from 'react';
import { Icon } from 'semantic-ui-react';

const LikeCount = ({ count }) => (
  <div className="ItemBox">
    <div className="ItemBoxImage">
      <Icon name="heart" size="big" />
    </div>
    <div className="ItemBoxNum">{count}</div>
  </div>
);

export default LikeCount;
