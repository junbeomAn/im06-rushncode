import React from 'react';

const ViewCount = ({ count }) => (
  <div className="ItemBox">
    <div className="ItemBoxNum">{count}</div>
    <div className="ItemBoxImage">
      {/* <Icon name="unhide" size="big" /> */}
      조회
    </div>
  </div>
);

export default ViewCount;
