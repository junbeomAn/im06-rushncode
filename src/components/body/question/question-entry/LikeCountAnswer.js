import React from 'react';
import { Icon } from 'semantic-ui-react';

const LikeCountAnswer = ({ aID, count, raiseLikeCount }) => (
  <div className="CountBox">
    <div className="CountBoxImage">
      <a className="likeBtn" href="#" onClick={() => raiseLikeCount(aID)}>
        <Icon name="heart" size="big" />
      </a>
    </div>
    <div className="CountBoxNum">{count}</div>
  </div>
);

export default LikeCountAnswer;
