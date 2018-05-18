import React from 'react';
import { Icon } from 'semantic-ui-react';

const Reward = ({ reward }) => (
  <div className="ItemBox">
    <div className="ItemBoxImage">
      <Icon name="money" size="big" />
    </div>
    <div className="ItemBoxNum">{reward}</div>
  </div>
);

export default Reward;
