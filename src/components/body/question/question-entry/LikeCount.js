import React from 'react';
import PropTypes from 'prop-types';
import heart from '../../../../styles/css/images/circle-icons/full-color/heart.png';

const LikeCount = ({ count }) => (
  <div className="LikeCountBox">
    <div className="LikeCountBoxImage">
      <img src={heart} width="40" height="40" alt="Like" />
    </div>
    <div className="LikeCountBoxNum">{count}</div>
  </div>
);

LikeCount.propTypes = {
  count: PropTypes.number.isRequired,
};

export default LikeCount;
