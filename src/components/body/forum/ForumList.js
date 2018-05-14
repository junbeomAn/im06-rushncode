import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

import '../../../styles/css/Forum.css';

const ForumList = ({ forums }) => {
  const forum = forums.map(item => (
    <div className="Forum" key={item.id}>
      <Link to={`forum/${item.id}`} href>
        <h2>{item.title}</h2>
      </Link>
      <p>{item.body}</p>
    </div>
  ));
  return (
    <div className="forumContainer">
      <div className="upper">
        <div className="jumbotron HomeJumbotron">
          <h1>자 유 게 시 판</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling extra
            attention to featured content or information.
          </p>
          <span className="homeLBtn">
            <NavLink to="/question" className="item">
              <button type="button" className="btn btn-outline-light btn-lg">
                글남기기
              </button>
            </NavLink>
          </span>
          <span className="homeRBtn">
            <NavLink to="/auth" className="item">
              <button type="button" className="btn btn-outline-light btn-lg">
                자랑하기
              </button>
            </NavLink>
          </span>
        </div>
      </div>
      <div className="ForumMain">{forum}</div>
    </div>
  );
};

ForumList.propTypes = {
  forums: PropTypes.array.isRequired,
};

export default ForumList;
