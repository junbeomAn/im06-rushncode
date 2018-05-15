import React from 'react';
import PropTypes from 'prop-types';

const LikeCount = ({ count }) => <div>좋아요 {count}</div>;

LikeCount.propTypes = {
  count: PropTypes.number.isRequired,
};

export default LikeCount;