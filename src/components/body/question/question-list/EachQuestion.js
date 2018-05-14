import React from 'react';
import { NavLink } from 'react-router-dom';
import { ViewCount, LikeCount, AnswerCount, Reward, Tags, UpdateTime } from '../question-list';

const EachQuestion = ({ questions }) => (
  <div>
    {questions.map(item => (
      <div className="questionPost">
        <div className="first">
          <ViewCount count={item.view} />
          <LikeCount count={item.good} />
          <AnswerCount count={item.good} />
        </div>
        <div className="second" key={item.id}>
          <NavLink to={`question/${item.id}`}>
            <h2>{item.title}</h2>
          </NavLink>
          <Tags tags={item.tags} />
        </div>
        <div className="third animated pulse">
          <Reward reward={item.reward} />
        </div>
        <div className="fourth">
          <div className="username">{item.username}</div>
          <UpdateTime time={item.updated_at} />
        </div>
      </div>
    ))}
  </div>
);

export default EachQuestion;
