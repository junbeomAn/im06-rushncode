import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../../../styles/css/QuestionEntry.css';
import QuestionAnswer from './QuestionAnswer';

const QuestionEntry = ({ title, body }) => (
  <div className="QuestionEntryContainer">
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
    <div className="QuestionEntryQuestion">
      <div className="QuestionEntryHeader">
        <div className="QuestionEntryHeaderTop">
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

      <div className="QuestionEntryMain">
        <div className="QuestionEntryMainFirst">good</div>
        <div className="QuestionEntryMainSecond">{body}</div>
        <div className="QuestionEntryMainThird">
          <div>
            <p>
              <span className="glyphicon glyphicon-eye-open" /> view
            </p>
          </div>
          <div>보상액 reward</div>
        </div>
      </div>

      <div className="QuestionEntryMain">
        <div className="QuestionEntryMainFirst">good</div>
        <div className="QuestionEntryMainSecond">
          <QuestionAnswer />
        </div>
        <div className="QuestionEntryMainThird">
          <div> Add component </div>
        </div>
      </div>
    </div>
  </div>
);

QuestionEntry.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

export default QuestionEntry;
