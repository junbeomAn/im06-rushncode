import React from 'react';
import PropTypes from 'prop-types';
// import shoeprints from '../../../../styles/css/images/circle-icons/one-color/shoeprints.png';
import { Icon } from 'semantic-ui-react';

const ViewCount = ({ count }) => (
  <div className="ItemBox">
    <div className="ItemBoxImage">
      <Icon name="unhide" size="big" />
    </div>
    <div className="ItemBoxNum">{count}</div>
  </div>
);

ViewCount.propTypes = {
  count: PropTypes.number.isRequired,
};

export default ViewCount;
