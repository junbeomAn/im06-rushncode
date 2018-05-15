import React from 'react';
import PropTypes from 'prop-types';
// import quote from '../../../../styles/css/images/circle-icons/one-color/quote.png';
import { Icon } from 'semantic-ui-react';

const LikeCount = ({ count }) => (
  <div className="LikeCountBox">
    <div className="LikeCountBoxImage">
      <Icon name="comments" size="big" />
    </div>
    <div className="LikeCountBoxNum">{count}</div>
  </div>
);

LikeCount.propTypes = {
  count: PropTypes.number.isRequired,
};

export default LikeCount;
