import React from 'react';

const LikeCount = ({ count }) => (
  <div className="ItemBox">
    <div className="ItemBoxNum">{count}</div>
    <div className="ItemBoxImage">
      추천
    </div>
  </div>
);

export default LikeCount;
