import React from 'react';
import { Icon } from 'semantic-ui-react';

const Reward = ({ reward }) => (
  <div className="ItemBox">
    <div className="ItemBoxNum">{reward}</div>
    <div className="ItemBoxImage">
      {/* <Icon name="money" size="big" /> */}
      이더
    </div>
  </div>
);

export default Reward;
