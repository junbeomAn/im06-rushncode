import React from 'react';
import PropTypes from 'prop-types';

const Reward = ({ reward }) => <div>{reward}원</div>;

Reward.propTypes = {
  reward: PropTypes.number.isRequired,
};

export default Reward;
