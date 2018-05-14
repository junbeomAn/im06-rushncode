import React from 'react';
import PropTypes from 'prop-types';

const ViewCount = ({ count }) => <div>조회수 {count}</div>;

ViewCount.propTypes = {
  count: PropTypes.number.isRequired,
};

export default ViewCount;
