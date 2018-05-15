import React from 'react';
import { NavLink } from 'react-router-dom';

const TagShowcase = () => (
  <div className="homeUpper">
    <div className="jumbotron HomeJumbotron">
      <h1>돈이 곧 명예</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling extra attention
        to featured content or information.
      </p>
      <span className="homeLBtn">
        <NavLink to="/question/write" className="item">
          <button type="button" className="btn btn-outline-light btn-lg">
            테그 페이
          </button>
        </NavLink>
      </span>
      <span className="homeRBtn">
        <NavLink to="/mywallet" className="item">
          <button type="button" className="btn btn-outline-light btn-lg">
            나의 지갑
          </button>
        </NavLink>
      </span>
    </div>
  </div>
);
export default TagShowcase;
