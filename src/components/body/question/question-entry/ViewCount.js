import React from 'react';
import PropTypes from 'prop-types';
import eye from '../../../../styles/css/images/circle-icons/full-color/eye.png';

const ViewCount = ({ count }) => (
  <div className="ViewCountBox">
    <div className="ViewCountBoxImage">
      <img src={eye} width="40" height="40" alt="Like" />
    </div>
    <div className="ViewCountBoxNum">{count}</div>
  </div>
);

ViewCount.propTypes = {
  count: PropTypes.number.isRequired,
};

export default ViewCount;
