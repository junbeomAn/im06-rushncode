import React from 'react';
import { Icon } from 'semantic-ui-react';

const AnswerCount = ({ count }) => (
  <div className="ItemBox">
    <div className="ItemBoxImage">
      <Icon name="comments" size="big" />
    </div>
    <div className="ItemBoxNum">{count}</div>
  </div>
);

export default AnswerCount;
