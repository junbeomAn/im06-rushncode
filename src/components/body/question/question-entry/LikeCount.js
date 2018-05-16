import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

const LikeCount = ({ count, raiseLikeCount }) => (
  <div className="CountBox">
    <div className="CountBoxImage">
      <a className="likeBtn" href="javascript:void(0);" onClick={() => raiseLikeCount()}>
        <Icon name="heart" size="big" />
      </a>
    </div>
    <div className="CountBoxNum">{count}</div>
  </div>
);

LikeCount.propTypes = {
  count: PropTypes.number.isRequired,
  qId: PropTypes.number.isRequired,
};

export default LikeCount;
