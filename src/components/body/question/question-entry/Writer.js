import React from 'react';
import { NavLink } from 'react-router-dom';
import { URL_API } from '../../../../config';

const Writer = ({
  username, userID, image, aImage, isLoggedIn,
}) => (
  <NavLink
    className="ItemBox likeBtn"
    onClick={() => !isLoggedIn && alert('로그인이 필요한 서비스입니다.')}
    to={isLoggedIn ? `/mypage/${userID}` : '/auth/signin'}
  >
    <div className="ItemBoxNum">
      {aImage ? (
        <img
          src={`${URL_API}/image/${aImage}_mini.png`}
          style={{ borderRadius: '5px' }}
          alt="image"
        />
      ) : (
        <img
          src={`${URL_API}/image/${image}_mini.png`}
          style={{ borderRadius: '5px' }}
          alt="image"
        />
      )}
    </div>
    <div className="ItemBoxImage">{username}</div>
  </NavLink>
);

export default Writer;
