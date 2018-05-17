import React from 'react';
import PropTypes from 'prop-types';
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

LikeCount.propTypes = {
  count: PropTypes.number.isRequired,
  raiseLikeCount: PropTypes.func.isRequired,
};

export default LikeCount;
