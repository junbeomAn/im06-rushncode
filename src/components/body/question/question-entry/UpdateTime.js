import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
// import clock from '../../../../styles/css/images/circle-icons/one-color/clock.png';
import { Icon } from 'semantic-ui-react';

const UpdateTime = ({ time }) => (
  <div className="ItemBox">
    <div className="ItemBoxImage">
      <Icon name="clock" size="big" />
    </div>
    <div className="ItemBoxNum">
      {moment(time)
        .startOf()
        .fromNow()}
    </div>
  </div>
);

UpdateTime.propTypes = {
  time: PropTypes.string.isRequired,
};

export default UpdateTime;
