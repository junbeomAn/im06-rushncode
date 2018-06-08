import React from 'react';
import { NavLink } from 'react-router-dom';
import WriteButton from './../../containers/showcase/writeButton';

const QuestionListShowcase = () => (
  <div className="ClauseUpper">
    <div className="jumbotron ClauseJumbotron">
      <span className="homeLBtn">
        <WriteButton />
      </span>
      <span className="homeRBtn dropdown">
        <button className="btn btn-outline-light btn-lg dropdown-toggle sort-btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          정렬방법
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <NavLink className="dropdown-item" to="/loading/sort/good">좋아요</NavLink>
          <NavLink className="dropdown-item" to="/loading/sort/view">조회수</NavLink>
          <NavLink className="dropdown-item" to="/loading/sort/reward">리워드</NavLink>
        </div>
      </span>
    </div>
  </div>
);

export default QuestionListShowcase;
