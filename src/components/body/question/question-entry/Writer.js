import React from 'react';
import { Icon } from 'semantic-ui-react';

const Writer = ({ username, userID }) => (
  <a className="ItemBox likeBtn" href={`/mypage/${userID}`}>
    <div className="ItemBoxImage">
      <Icon name="vcard" size="big" />
      <div className="ItemBoxNum">{username}</div>
    </div>
  </a>
);

export default Writer;
