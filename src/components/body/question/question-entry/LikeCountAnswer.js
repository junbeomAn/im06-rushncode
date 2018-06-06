import React from 'react';
import { Icon } from 'semantic-ui-react';

const LikeCountAnswer = ({ aID, count, raiseLikeCount }) => (
  <div className="CountBox">
    <div className="CountBoxImage">
      <div className="likeBtn" onClick={() => raiseLikeCount(aID)}>
        <Icon name="heart" size="big" className="res-icon" />
        <div className="CountBoxNum">{count}</div>
      </div>
    </div>
  </div>
);

export default LikeCountAnswer;
