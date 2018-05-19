import React from 'react';
import { Icon } from 'semantic-ui-react';

const LikeCount = ({ count, raiseLikeCount }) => (
  <div className="CountBox">
    <div className="CountBoxImage">
      <a className="likeBtn" href="#" onClick={() => raiseLikeCount()}>
        <Icon name="heart" size="big" />
      </a>
    </div>
    <div className="CountBoxNum">{count}</div>
  </div>
);

export default LikeCount;
