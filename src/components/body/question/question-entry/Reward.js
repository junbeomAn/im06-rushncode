import React from 'react';
import PropTypes from 'prop-types';
// import trophy from '../../../../styles/css/images/circle-icons/one-color/trophy.png';
import { Icon } from 'semantic-ui-react';

const Reward = ({ reward }) => (
  <div className="CountBox">
    <div className="CountBoxImage">
      {/* <img src={trophy} width="40" height="40" alt="Like" /> */}
      <Icon name="money" size="big" />
    </div>
    <div className="CountBoxNum">{reward}</div>
  </div>
);

Reward.propTypes = {
  reward: PropTypes.number.isRequired,
};

export default Reward;
