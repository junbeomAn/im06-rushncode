import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import '../../../styles/css/Quest.css';

const Forum = ({ title, body }) => (
  <div>
    <div className="upper">
      <div className="jumbotron HomeJumbotron">
        <h1>창 조 경 제</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention
          to featured content or information.
        </p>
        <span className="homeLBtn">
          <NavLink to="/question" className="item">
            <button type="button" className="btn btn-outline-light btn-lg">
              답변하기
            </button>
          </NavLink>
        </span>
        <span className="homeRBtn">
          <NavLink to="/auth" className="item">
            <button type="button" className="btn btn-outline-light btn-lg">
              덧글달기
            </button>
          </NavLink>
        </span>
      </div>
    </div>
    <h1>{title}</h1>
    <p>{body}</p>
  </div>
);

Forum.propTypes = {
  posts: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Forum;
