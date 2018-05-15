import React from 'react';
import PropTypes from 'prop-types';
// import shoeprints from '../../../../styles/css/images/circle-icons/one-color/shoeprints.png';
import { Icon } from 'semantic-ui-react';

const ViewCount = ({ count }) => (
  <div className="CountBox">
    <div className="CountBoxImage">
      {/* <img src={shoeprints} width="40" height="40" alt="Like" /> */}
      <Icon name="unhide" size="big" />
    </div>
    <div className="CountBoxNum">{count}</div>
  </div>
);

ViewCount.propTypes = {
  count: PropTypes.number.isRequired,
};

export default ViewCount;
