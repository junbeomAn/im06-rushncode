import React from 'react';
import moment from 'moment';
import 'moment/locale/ko';

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
export default UpdateTime;
