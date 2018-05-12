import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../../../styles/css/Quest.css';
import Answer from './Answer';

const Quest = ({ title, body }) => (
  <div className="questContainer">
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
    <div className="quest">
      <div className="questHeader">
        <div className="questHeaderTop">
          <h1>{title}</h1>
        </div>
        <div className="tags">
          <button type="button" className="btn btn-outline-secondary questListBtn">
            Javascript
          </button>
          <button type="button" className="btn btn-outline-secondary questListBtn">
            React
          </button>
          <button type="button" className="btn btn-outline-secondary questListBtn">
            Redux
          </button>
        </div>
      </div>
      
      <div className="questMain">
        <div className="questMainFirst">good</div>
        <div className="questMainSecond">{body}</div>
        <div className="questMainThird">
          <div>
            <p>
              <span className="glyphicon glyphicon-eye-open" /> view
            </p>
          </div>
          <div>보상액 reward</div>
        </div>
      </div>

      <div className="questMain">
        <div className="questMainFirst">good</div>
        <div className="questMainSecond">
          <Answer />
        </div>
        <div className="questMainThird">
          <div> Add component </div>
        </div>
      </div>
    </div>
  </div>
);

Quest.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

export default Quest;
