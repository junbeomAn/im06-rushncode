import React from 'react';

const Writer = ({
  username, userID, image, aImage,
}) => (
  <a className="ItemBox likeBtn" href={`/mypage/${userID}`}>
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
  </a>
);

export default Writer;
