import React from 'react';
import { Icon } from 'semantic-ui-react';

const Complete = () => (
  <div className="ItemBox">
    <div className="box-icon">
      <Icon name="check" size="big" className="complete-top home-icon" />
    </div>
    <div className="ItemBoxImage">
      <span className="complete-bot">완료</span>
    </div>
  </div>
);

export default Complete;
