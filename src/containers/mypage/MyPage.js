import React, { Component } from 'react';
import axios from 'axios';

export class MyPage extends Component {
  state = { user: '' };
  componentDidMount() {
    this.getUserInfo();
  }

  getUserInfo = () => {
    const { userID } = this.props.match.params;
    const config = {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    };
    axios.get(`http://localhost:3001/api/mypage/profile/${userID}`, config).then(res =>
      this.setState({
        user: res.data.data,
      }));
  };
  render() {
    console.log(this.state.user);
    const { user } = this.state;
    return (
      <div className="mypage-container">
        {!user ? (
          <div>Loading...</div>
        ) : (
          <div className="mypage-inner-container">
            <div className="first">
              <div className="first-image">이미지</div>
              <div className="first-userinfo">
                <div className="username">{user.username}</div>
                <div className="email">{user.email}</div>
              </div>
            </div>
            <div className="second">
              <div className="second-one">
                <div className="second-one-title">파워랭킹</div>
                <div className="second-one-score">12위</div>
                <br />
                <br />
                <div className="second-one-title">점수</div>
                <div className="second-one-score">40500</div>
              </div>
              <div className="second-two">
                <div className="second-two-title">활동</div>
                <div className="second-two-box">
                  <div className="second-two-box-inner">
                    <div className="count">{user.numOfQuestions}</div>
                    <div>질문</div>
                  </div>
                  <div className="second-two-box-inner">
                    <div className="count">{user.numOfAnswers}</div>
                    <div>답변</div>
                  </div>
                  <div className="second-two-box-inner">
                    <div className="count">{user.numOfChooseAnswers}</div>
                    <div>채택</div>
                  </div>
                </div>
              </div>
              <div className="second-three">
                <div className="second-three-title">통계</div>
                <div className="second-three-box">
                  <div className="second-three-box-inner">
                    <div className="count">
                      {user.numOfAnswers === 0 ? (
                        <span className="default">내역없음</span>
                      ) : (
                        <span className="blue">
                          {Math.floor(user.numOfChooseAnswers / user.numOfAnswers * 100)}%
                        </span>
                      )}
                    </div>
                    <div>채택률</div>
                  </div>
                  <div className="second-three-box-inner">
                    <div className="count">
                      {user.numOfAnswers === 0 ? (
                        <span className="default">내역없음</span>
                      ) : (
                        <span className="blue">
                          {Math.floor(user.pickedAnswers / user.numOfAnswers * 100)}%
                        </span>
                      )}
                    </div>
                    <div>적중률</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="third">실제 질문 답변 내역</div>
          </div>
        )}
      </div>
    );
  }
}

export default MyPage;
