import React from 'react';
import { Icon } from 'semantic-ui-react';

const ViewCount = ({ count }) => (
  <div className="ItemBox">
    <div className="ItemBoxImage">
      <Icon name="unhide" size="big" />
    </div>
    <div className="ItemBoxNum">{count}</div>
  </div>
);

export default ViewCount;
