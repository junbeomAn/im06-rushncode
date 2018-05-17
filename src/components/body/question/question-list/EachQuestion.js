import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Tags, UpdateTime, LikeCount } from '../question-list';
import { ViewCount, AnswerCount, Reward } from '../question-entry';

const EachQuestion = ({ questions }) => (
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
            <AnswerCount count={0} />
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

EachQuestion.propTypes = {
  questions: PropTypes.array.isRequired,
};

export default EachQuestion;
