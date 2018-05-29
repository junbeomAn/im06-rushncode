import React from 'react';
import { NavLink } from 'react-router-dom';
import { Tags, UpdateTime, LikeCount } from './question/question-list';
import { ViewCount, AnswerCount, Reward, Complete } from './question/question-entry';

const HomeEachQuestion = ({ questions }) => (
  <div>
    {questions.map(item => (
      <div className="questionPost" key={item.id}>
        <div className="first">
          <div className="firstItem view">
            <ViewCount count={item.view} />
          </div>
          <div className="firstItem like">
            <LikeCount count={item.good} />
          </div>
          <div className="firstItem answerCount">
            <AnswerCount count={item.countAnswers} />
          </div>
          <div className="firstItem">
            {item.exist_picked_ans ? <Complete /> : <Reward reward={item.reward} />}
          </div>
        </div>
        <div className="second">
          <NavLink exact to={`/question/${item.id}`}>
            <h2>{item.title}</h2>
          </NavLink>
          <Tags tags={item.tags} />
        </div>
        <div className="fourth">
          <NavLink className="username" to={`/mypage/${item.userID}`}>
            {item.username}
          </NavLink>
          <UpdateTime time={item.updated_at} />
        </div>
      </div>
    ))}
  </div>
);

export default HomeEachQuestion;
