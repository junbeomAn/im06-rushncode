import React from 'react';

const Reward = ({ reward }) => (
  <div className="ItemBox">
    <div className="ItemBoxNum">{reward}</div>
    <div className="ItemBoxImage">
      {/* <Icon name="money" size="big" /> */}
      금액
    </div>
  </div>
);

export default Reward;
