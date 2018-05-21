import React from 'react';
import { Icon } from 'semantic-ui-react';

const LikeCount = ({ count, raiseLikeCount }) => (
  <div className="CountBox">
    <div className="CountBoxImage">
      <div className="likeBtn" onClick={() => raiseLikeCount()}>
        <Icon name="heart" size="big" />
      </div>
    </div>
    <div className="CountBoxNum">{count}</div>
  </div>
);

export default LikeCount;
