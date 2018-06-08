import React from 'react';
import { NavLink } from 'react-router-dom';
import { Tags, UpdateTime, LikeCount } from '../question-list';
import { ViewCount, AnswerCount, Reward, Complete, Breaked } from '../question-entry';

const EachQuestion = ({ questions, currentPage, isLoggedIn }) => (
  <div>
    {questions.map(item => (
      <div className="questionPost" key={item.id}>
        <div className="first">
          <div className="firstItem">
            <ViewCount count={item.view} />
          </div>
          <div className="firstItem">
            <LikeCount count={item.good} />
          </div>
          <div className="firstItem">
            <AnswerCount count={item.countAnswers} />
          </div>
          <div className="firstItem">
            {item.exist_picked_ans ? (
              <Complete />
            ) : item.breaked ? (
              <Breaked />
            ) : (
              <Reward reward={item.reward} />
            )}
          </div>
        </div>
        <div className="second">
          <NavLink to={`/question/${item.id}`}>
            <h2>{item.title}</h2>
          </NavLink>
          <Tags tags={item.tags} currentPage={currentPage} />
        </div>
        <div className="fourth">
          <NavLink
            className="username"
            onClick={() => !isLoggedIn && alert('로그인이 필요한 서비스입니다.')}
            to={isLoggedIn ? `/mypage/${item.userID}` : '/auth/signin'}
          >
            {item.username}
          </NavLink>
          <UpdateTime time={item.updated_at} />
        </div>
      </div>
    ))}
  </div>
);

export default EachQuestion;
