import React from 'react';
import { NavLink } from 'react-router-dom';
import { URL_API } from '../../../../config';

const Writer = ({
  username, userID, image, aImage,
}) => (
  <NavLink className="ItemBox likeBtn" to={`/mypage/${userID}`}>
    <div className="ItemBoxNum">
      {aImage ? (
        <img src={`${URL_API}/image/${aImage}_mini.png`} style={{ borderRadius: '5px' }} alt="image" />
      ) : (
        <img src={`${URL_API}/image/${image}_mini.png`} style={{ borderRadius: '5px' }} alt="image" />
      )}
    </div>
    <div className="ItemBoxImage">{username}</div>
  </NavLink>
);

export default Writer;
