import React from 'react';

const LikeCount = ({ count }) => (
  <div className="ItemBox">
    <div className="ItemBoxNum">{count}</div>
    <div className="ItemBoxImage">
      {/* <Icon name="heart" size="big" /> */}
      좋아요
    </div>
  </div>
);

export default LikeCount;
