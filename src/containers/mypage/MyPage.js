import React, { Component } from 'react';
import axios from 'axios';

export class MyPage extends Component {
  state = { user: '' };
  componentDidMount() {}

  getUserInfo = () => {
    const { userID } = this.props.match.params;
    axios.get(`http://localhost:3001/api/mypage/profile/${userID}`).then(res =>
      this.setState({
        user: res.data,
      }));
  };
  render() {
    return (
      <div className="mypage-container">
        <div className="mypage-inner-container">
          <div className="first">
            <div className="first-image">이미지</div>
            <div className="first-userinfo">
              <div className="username">username</div>
              <div className="email">han6318@naver.com</div>
            </div>
          </div>
          <div className="second">
            <div className="second-one">
              <div className="second-one-title">파워랭킹</div>
              <div className="second-one-score">12</div>
              <br />
              <br />
              <div className="second-one-title">점수</div>
              <div className="second-one-score">40500</div>
            </div>
            <div className="second-two">
              <div className="second-two-title">활동</div>
              <div className="second-two-box">
                <div className="second-two-box-inner">
                  <div className="count">15</div>
                  <div>질문</div>
                </div>
                <div className="second-two-box-inner">
                  <div className="count">25</div>
                  <div>답변</div>
                </div>
                <div className="second-two-box-inner">
                  <div className="count">15</div>
                  <div>좋아요</div>
                </div>
              </div>
              <br />
              <br />
              <div className="second-two-box">
                <div className="second-two-box-inner">
                  <div className="count">
                    <span className="blue">75%</span>
                  </div>
                  <div>채택률</div>
                </div>
                <div className="second-two-box-inner">
                  <div className="count">
                    <span className="red">32%</span>
                  </div>
                  <div>적중률</div>
                </div>
              </div>
            </div>
            <div className="second-three">
              <div className="second-three-title">통계</div>
            </div>
          </div>
          <div className="third">실제 질문 답변 내역</div>
        </div>
      </div>
    );
  }
}

export default MyPage;
