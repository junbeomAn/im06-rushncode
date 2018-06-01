import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Icon, Dimmer, Loader } from 'semantic-ui-react';

import MyQuestion from './MyQuestion';
import MyAnswer from './MyAnswer';
import { fetchMyQuestion } from '../../redux/actions/mypageAction';
import { Verify } from '../../redux/actions/verifyAction';

import { URL_API } from '../../config';

export class MyPage extends Component {
  state = { first: true, selectedFile: '' };

  componentWillMount() {
    // myID 가져오는 용도
    this.props.Verify();
  }

  componentDidMount() {
    const { userID } = this.props.match.params;
    this.props.fetchMyQuestion(userID);
  }

  componentWillReceiveProps() {
    if (!this.props.loading) this.setState({ first: false });
  }

  fileChangedHandler = async (event) => {
    // console.log(event.target.files[0]);
    await this.setState({ selectedFile: event.target.files[0] });
    this.uploadHandler();
  };

  uploadHandler = () => {
    const formData = new FormData();
    formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name);
    const config = {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    };
    const { userID } = this.props.match.params;
    axios
      .post(`${URL_API}/api/upload/image/${userID}`, formData, config)
      .then(res => window.location.reload());
  };

  /* eslint no-nested-ternary: 0 */
  render() {
    const { user, loading, myID } = this.props;
    console.log('props : ', this.props);
    const { first } = this.state;
    const { userID } = this.props.match.params;
    return (
      <div className="mypage-container">
        {loading ? (
          <Dimmer active>
            <Loader />
          </Dimmer>
        ) : first ? (
          <Dimmer active>
            <Loader />
          </Dimmer>
        ) : (
          <div className="mypage-inner-container">
            <div className="first">
              <div className="first-image">
                <img src={`${URL_API}/image/${user.image}.png`} alt="" />
              </div>
              {myID === Number(userID) ? (
                <div className="upload-btn-wrapper">
                  <button className="btn">
                    <h5 className="upload">
                      <Icon name="camera retro" size="large" />
                      <span> 사진 업로드</span>
                    </h5>
                  </button>
                  <input type="file" name="myfile" onChange={e => this.fileChangedHandler(e)} />
                </div>
              ) : null}
              <div className="first-userinfo">
                <div className="username">{user.username}</div>
                <div className="email">{user.email}</div>
              </div>
            </div>
            <div className="second">
              <div className="second-one shadow">
                <div className="second-one-title">등급</div>
                <div className="second-one-score">채굴자</div>
                <br />
                <br />
                <div className="second-one-title">총 획득 이더</div>
                <div className="second-one-score">40500</div>
              </div>
              <div className="second-two shadow">
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
              <div className="second-three shadow">
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
                        <span className="red">
                          {Math.floor(user.pickedAnswers / user.numOfAnswers * 100)}%
                        </span>
                      )}
                    </div>
                    <div>적중률</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="third">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <a
                    className="nav-item nav-link active"
                    id="nav-default-tab"
                    data-toggle="tab"
                    href="#nav-default"
                    role="tab"
                    aria-controls="nav-default"
                    aria-selected="true"
                  >
                    질문 {user.questions.length}
                  </a>
                  <a
                    className="nav-item nav-link"
                    id="nav-answer-tab"
                    data-toggle="tab"
                    href="#nav-answer"
                    role="tab"
                    aria-controls="nav-answer"
                    aria-selected="false"
                  >
                    답변 {user.answers.length}
                  </a>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-default"
                  role="tabpanel"
                  aria-labelledby="nav-default-tab"
                >
                  <MyQuestion questions={user.questions} />
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-answer"
                  role="tabpanel"
                  aria-labelledby="nav-answer-tab"
                >
                  <MyAnswer answers={user.answers} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

// 원하는이름 : state.(Reducer/index.js 정의한 이름).(initialState 해당 이름)
const mapStateToProps = state => ({
  user: state.mypage.items,
  loading: state.mypage.loading,
  myID: state.verify.userID,
});

// export default 커넥트(mapStateToProps, { action에 정의된 함수 })(해당 컴포넌트)
export default connect(mapStateToProps, { fetchMyQuestion, Verify })(MyPage);
