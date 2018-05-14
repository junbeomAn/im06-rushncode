import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

import '../../../styles/css/QuestionList.css';

const QuestionList = ({ posts }) => {
  console.log('POSTS : ', posts);
  const post = posts.map(item => (
    <div className="questionPost">
      <div className="first">
        <div>조회수 42</div>
        <div>좋아요 {item.good}</div>
        <div>답변수</div>
      </div>
      <div className="second" key={item.id}>
        <NavLink to={`question/${item.id}`}>
          <h2>{item.title}</h2>
        </NavLink>
        <div className="tags">
          {item.tags.map(tag => (
            <button type="button" className="btn btn-outline-secondary questListBtn">
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div className="third animated pulse">
        <div>{item.reward}원</div>
      </div>
      <div className="fourth">
        <div className="username">{item.username}</div>
        <div>
          {moment(item.updated_at)
            .startOf()
            .fromNow()}
        </div>
      </div>
    </div>
  ));
  return (
    <div className="questContainer">
      <div className="upper">
        <div className="jumbotron HomeJumbotron">
          <h1>돈이 곧 명예</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling extra
            attention to featured content or information.
          </p>
          <span className="homeLBtn">
            <NavLink to="/question/write" className="item">
              <button type="button" className="btn btn-outline-light btn-lg">
                질문 하기
              </button>
            </NavLink>
          </span>
          <span className="homeRBtn">
            <NavLink to="/myquestion" className="item">
              <button type="button" className="btn btn-outline-light btn-lg">
                나의 질문
              </button>
            </NavLink>
          </span>
        </div>
      </div>
      <div className="questionMain">
        {post}
        <div>
          <ul className="pagination questionPagenation">
            <li className="page-item disabled">
              <NavLink to="/auth" className="item page-link" href="#">
                Prev
              </NavLink>
            </li>
            <li className="page-item">
              <NavLink to="/auth" className="item page-link" href="#">
                Next
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

QuestionList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default QuestionList;
