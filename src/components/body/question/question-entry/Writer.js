import React from 'react';
import image from '../../../../images/profile/coding.png';

const Writer = ({ username, userID }) => (
  <a className="ItemBox likeBtn" href={`/mypage/${userID}`}>
    <div className="ItemBoxNum">
      <img src={image} alt="사용자" width={40} style={{ borderRadius: '5px' }} />
    </div>
    <div className="ItemBoxImage">{username}</div>
  </a>
);

export default Writer;
