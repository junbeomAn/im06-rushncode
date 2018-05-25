import React from 'react';
import { Icon } from 'semantic-ui-react';

const AnswerCount = ({ count }) => (
  <div className="ItemBox">
    <div className="ItemBoxNum">{count}</div>
    <div className="ItemBoxImage">
      {/* <Icon name="comments" size="big" /> */}
      답변
    </div>
  </div>
);

export default AnswerCount;
