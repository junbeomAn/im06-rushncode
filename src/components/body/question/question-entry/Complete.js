import React from 'react';
import { Icon } from 'semantic-ui-react';

const Complete = () => (
  <div className="ItemBox2">
    <div className="ItemBox2Image complete">
      <Icon name="check" size="big" />
    </div>
    <div className="ItemBoxNum">
      <span className="complete">완료</span>
    </div>
  </div>
);

export default Complete;
