import React from 'react';
import { NavLink } from 'react-router-dom';

const Writer = ({
  username, userID, image, aImage,
}) => (
  <NavLink className="ItemBox likeBtn" to={`/mypage/${userID}`}>
    <div className="ItemBoxNum">
      {aImage ? (
        <img
          src={require(`../../../../images/profile/${aImage}_mini.png`)}
          style={{ borderRadius: '5px' }}
          alt="image"
        />
      ) : (
        <img
          src={require(`../../../../images/profile/${image}_mini.png`)}
          style={{ borderRadius: '5px' }}
          alt="image"
        />
      )}
    </div>
    <div className="ItemBoxImage">{username}</div>
  </NavLink>
);

export default Writer;
