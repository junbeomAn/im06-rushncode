import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Grid, Image } from 'semantic-ui-react';
import MyQuestion from './MyQuestion';
import MyAnswer from './MyAnswer';
import image from '../../styles/css/images/testimonials/testimonial3.jpg';
import { fetchMyQuestion } from '../../redux/actions/mypageAction';

export class MyPage extends Component {
  state = { first: true, imageURL: '' };
  componentDidMount() {
    const { userID } = this.props.match.params;
    this.props.fetchMyQuestion(userID);
  }

  componentWillReceiveProps() {
    if (!this.props.loading) this.setState({ first: false });
  }

  handleUploadImage = (ev) => {
    ev.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.fileName.value);

    const config = {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    };
    
    const { userID } = this.props.match.params;
    const send = { body: data };
    axios.post(`http://localhost:3001/api/upload/image/${userID}`, send, config).then((res) => {
      res.json().then((body) => {
        this.setState({ imageURL: `http://localhost:3001/${body.file}` });
      });
    });
  };

  /* eslint no-nested-ternary: 0 */
  render() {
    const { user, loading } = this.props;
    const { first } = this.state;
    console.log(user);
    return (
      <div className="mypage-container">
        {loading ? (
          <div>Loading...</div>
        ) : first ? (
          <h1>Loading...</h1>
        ) : (
          <div className="mypage-inner-container">
            <div className="first">
              <div className="first-image">
                <Grid>
                  <Grid.Column>
                    <Image
                      fluid
                      label={{
                        as: 'a',
                        color: 'blue',
                        content: '버스기사',
                        icon: 'bus',
                        ribbon: true,
                        onClick: () => {
                          this.handleUploadImage();
                        },
                      }}
                      src={image}
                      // src={this.state.imageURL}
                    />
                  </Grid.Column>
                </Grid>
              </div>
              <div className="first-userinfo">
                <div className="username">{user.username}</div>
                <div className="email">{user.email}</div>
                <div className="upload">
                  {/* 사진파일 업로드 */}
                  <form onSubmit={this.handleUploadImage}>
                    <div>
                      <input
                        ref={(ref) => {
                          this.uploadInput = ref;
                        }}
                        type="file"
                      />
                    </div>
                    <div>
                      <button id="ex_file">Upload</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="second">
              <div className="second-one shadow">
                <div className="second-one-title">파워랭킹</div>
                <div className="second-one-score">12위</div>
                <br />
                <br />
                <div className="second-one-title">점수</div>
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
});

// export default 커넥트(mapStateToProps, { action에 정의된 함수 })(해당 컴포넌트)
export default connect(mapStateToProps, { fetchMyQuestion })(MyPage);
