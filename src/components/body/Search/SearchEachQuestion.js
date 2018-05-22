import React from 'react';
import { NavLink } from 'react-router-dom';
import { Tags, UpdateTime, LikeCount } from './../question/question-list';
import {AnswerCount, Reward } from './../question/question-entry';

const SearchEachQuestion = ({ questions }) => (
  <div>
    {questions.map(item => (      
      <div className="questionPost" key={item.id}>
        <div className="first">
          <div className="firstItem">
            <LikeCount count={item.good} />
          </div>
          <div className="firstItem">
            <AnswerCount count={item.countAnswers} />
          </div>
          <div className="firstItem">
            <Reward reward={item.reward} />
          </div>
        </div>
        <div className="second">
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

export default SearchEachQuestion;
