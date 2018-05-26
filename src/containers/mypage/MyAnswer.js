import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  ViewCount,
  AnswerCount,
  Reward,
  Complete,
} from '../../components/body/question/question-entry';
import { Tags, UpdateTime, LikeCount } from '../../components/body/question/question-list';

export class MyAnswer extends Component {
  state = {};
  render() {
    const { answers } = this.props;
    return (
      <div className="container">
        {answers.map(item => (
          <div className="box" key={item.id}>
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
                {item.picked ? <Complete /> : <Reward reward={item.reward} />}
              </div>
            </div>
            <div className="second">
              <NavLink to={`/question/${item.id}`}>
                <h2>{item.title}</h2>
              </NavLink>
              <Tags tags={item.tags} />
            </div>
            <div className="fourth">
              <a className="username" href={`/mypage/${item.userID}`}>
                {item.username}
              </a>
              <UpdateTime time={item.updated_at} />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default MyAnswer;
