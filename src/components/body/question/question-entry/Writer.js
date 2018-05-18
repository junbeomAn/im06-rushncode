import React from 'react';
// import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

const Writer = () => (
  <div className="ItemBox">
    <div className="ItemBoxImage">
      <Icon name="vcard" size="big" />
    </div>
    <div className="ItemBoxNum">홍길동</div>
  </div>
);

Writer.propTypes = {
  // reward: PropTypes.number.isRequired,
};

export default Writer;
