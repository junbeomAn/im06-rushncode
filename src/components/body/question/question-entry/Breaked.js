import React from 'react';
import { Icon } from 'semantic-ui-react';

const Breaked = () => (
  <div className="ItemBox">
    <div className="ItemBoxNum box-icon">
      <Icon name="warning sign" size="big" className="break-top home-icon" />
    </div>
    <div className="ItemBoxImage">
      <span className="break-bot">마감</span>
    </div>
  </div>
);

export default Breaked;
