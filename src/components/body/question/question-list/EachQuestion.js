import React from 'react';
import { NavLink } from 'react-router-dom';
import { Tags, UpdateTime, LikeCount } from '../question-list';
import { ViewCount, AnswerCount, Reward } from '../question-entry';

const EachQuestion = ({ questions }) => (
  <div>
    {questions
      .slice()
      .reverse()
      .map(item => (
        <div className="questionPost">
          <div className="first">
            <div className="firstItem">
              <ViewCount count={item.view} />
            </div>
            <div className="firstItem">
              <LikeCount count={item.good} />
            </div>
            <div className="firstItem">
              <AnswerCount count={item.good} />
            </div>
            <div className="firstItem">
              <Reward reward={item.reward} />
            </div>
          </div>
          <div className="second" key={item.id}>
            <NavLink to={`question/${item.id}`}>
              <h2>{item.title}</h2>
            </NavLink>
            <Tags tags={item.tags} />
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
