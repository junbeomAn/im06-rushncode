import React from 'react';
import moment from 'moment';

const UpdateTime = ({ time }) => (
  <div className="time">
    {moment(time)
      .startOf()
      .fromNow()}
  </div>
);

export default UpdateTime;
