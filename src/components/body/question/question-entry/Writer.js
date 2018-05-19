import React from 'react';
import { Icon } from 'semantic-ui-react';

const Writer = ({ username }) => (
  <div className="ItemBox">
    <div className="ItemBoxImage">
      <Icon name="vcard" size="big" />
    </div>
    <div className="ItemBoxNum">{username}</div>
  </div>
);

export default Writer;
