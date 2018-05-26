import React from 'react';
import WriteButton from './../../containers/showcase/writeButton';

const QuestionListShowcase = () => (
  <div className="ClauseUpper">
    <div className="jumbotron ClauseJumbotron">
      <span className="homeLBtn">
        <WriteButton />
      </span>
      <span className="homeRBtn dropdown">
        {/* <NavLink to="/mywallet" className="item">
          <button type="button" className="btn btn-outline-light btn-lg">
            정렬 방법
          </button>
        </NavLink> */}
        <button className="btn btn-outline-light btn-lg dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          정렬방법
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="/sort/good">좋아요</a>
          <a className="dropdown-item" href="/sort/view">조회수</a>
          <a className="dropdown-item" href="/sort/reward">리워드</a>
        </div>
      </span>
    </div>
  </div>
);

export default QuestionListShowcase;
