import React from 'react';
import { Icon } from 'semantic-ui-react';

const LikeCount = ({ count, raiseLikeCount, isLoggedIn }) => (
  <div className="CountBox">
    <div className="CountBoxImage">
      <div
        className="likeBtn"
        onClick={() => {
          if (!isLoggedIn) return alert('로그인이 필요한 서비스 입니다.');
          raiseLikeCount();
        }}
      >
        <Icon name="heart" size="big" className="res-icon" />
        <div className="CountBoxNum">{count}</div>
      </div>
    </div>
  </div>
);

export default LikeCount;
