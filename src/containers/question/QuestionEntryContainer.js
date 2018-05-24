import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactMarkDown from 'react-markdown';
import axios from 'axios';
import QuestionEntry from '../../components/body/question/QuestionEntry';
import {
  fetchQuestionEntry,
  fetchModifyQuestion,
  fetchModifyAnswer,
} from '../../redux/actions/questionAction';
import { Verify } from '../../redux/actions/verifyAction';

class QuestionEntryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: true,
      src: '',
    };
  }
  componentWillMount() {
    this.props.Verify();
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchQuestionEntry(id);
  }

  componentWillReceiveProps() {
    if (!this.props.loading) this.setState({ first: false });
  }

  changeValue = (e) => {
    e.preventDefault();
    this.setState({
      src: e.target.value,
    });
  };

  postAnswer = () => {
    const { id } = this.props.match.params;
    const { src } = this.state;
    const config = {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    };
    const data = {
      questionID: id,
      body: src,
    };
    if (!data.body) return alert('내용을 입력해주세요');
    axios
      .post('http://localhost:3001/api/question/answer/', data, config)
      .then((res) => {
        console.log('답변 제출 응답 : ', res);
        this.props.fetchQuestionEntry(id);
      })
      .catch((err) => {
        throw err;
      });
  };

  postQuestionReply = () => {
    const { id } = this.props.match.params;
    const config = {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    };
    const data = {
      questionID: id,
    };
    data.body = document.getElementsByClassName('questionReplyBody')[0].value;
    if (!data.body) return alert('내용을 입력해주세요');
    axios
      .post('http://localhost:3001/api/question/reply/', data, config)
      .then((res) => {
        // console.log(res.data);
        this.props.fetchQuestionEntry(id);
      })
      .catch((err) => {
        throw err;
      });
  };

  postAnswerReply = (answerID) => {
    const config = {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    };
    const data = {
      answerID,
    };
    data.body = document.getElementsByClassName(`answerReplyBody${answerID}`)[0].value;
    console.log(data.body);
    if (!data.body) return alert('내용을 입력해주세요');
    axios
      .post('http://localhost:3001/api/question/chanswer/', data, config)
      .then((res) => {
        console.log(res.data);
        const { id } = this.props.match.params;
        this.props.fetchQuestionEntry(id);
      })
      .catch(err => console.log(err));
  };

  pickAnswer = (answerID) => {
    const config = {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    };
    axios
      .post(`http://localhost:3001/api/question/pickanswer/${answerID}`, {}, config)
      .then((res) => {
        console.log(res);
        const { id } = this.props.match.params;
        this.props.fetchQuestionEntry(id);
      })
      .catch(err => console.log(err));
  };

  raiseLikeCount = (answerID) => {
    const config = {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    };
    if (!answerID) {
      axios
        .post(`http://localhost:3001/api/question/good/${this.props.question.qID}`, {}, config)
        .then(() => {
          const { id } = this.props.match.params;
          this.props.fetchQuestionEntry(id);
        })
        .catch(err => console.log(err));
    } else {
      axios
        .post(`http://localhost:3001/api/question/goodanswer/${answerID}`, {}, config)
        .then(() => {
          const { id } = this.props.match.params;
          this.props.fetchQuestionEntry(id);
        })
        .catch(err => console.log(err));
    }
  };

  deleteQuestion = () => {
    const config = {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    };
    const { id } = this.props.match.params;
    axios
      .post(`http://localhost:3001/api/delete/question/${id}`, {}, config)
      .then(() => {
        this.props.history.push('/question');
      })
      .catch(err => console.log(err));
  };

  deleteAnswer = (answerID) => {
    const config = {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    };
    axios
      .post(`http://localhost:3001/api/delete/answer/${answerID}`, {}, config)
      .then(() => {
        const { id } = this.props.match.params;
        this.props.fetchQuestionEntry(id);
      })
      .catch(err => console.log(err));
  };

  deleteChAnswer = (cID) => {
    const config = {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    };
    axios
      .post(`http://localhost:3001/api/delete/chanswer/${cID}`, {}, config)
      .then(() => {
        const { id } = this.props.match.params;
        this.props.fetchQuestionEntry(id);
      })
      .catch(err => console.log(err));
  };

  deleteReply = (rID) => {
    const config = {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    };
    axios
      .post(`http://localhost:3001/api/delete/reply/${rID}`, {}, config)
      .then(() => {
        const { id } = this.props.match.params;
        this.props.fetchQuestionEntry(id);
      })
      .catch(err => console.log(err));
  };

  /* eslint no-nested-ternary: 0 */
  render() {
    const {
      username,
      userID,
      title,
      qBody,
      qGood,
      qView,
      qReward,
      qTime,
      qID,
      replies,
      answers,
      exist_picked_ans,
    } = this.props.question;
    const { first } = this.state;
    console.log(this.props.question);
    return (
      <div>
        {this.props.loading ? (
          <h1>Loading...</h1>
        ) : first ? (
          <h1>Loading...</h1>
        ) : (
          <div className="QuestionEntryContainer">
            <QuestionEntry
              username={username}
              myID={this.props.myID}
              userID={userID}
              title={title}
              qID={qID}
              qBody={qBody}
              qGood={qGood}
              qView={qView}
              qReward={qReward}
              qTime={qTime}
              replies={replies}
              answers={answers}
              existPickedAnswer={exist_picked_ans}
              pickAnswer={this.pickAnswer}
              raiseLikeCount={this.raiseLikeCount}
              postQuestionReply={this.postQuestionReply}
              postAnswerReply={this.postAnswerReply}
              deleteQuestion={this.deleteQuestion}
              deleteAnswer={this.deleteAnswer}
              deleteChAnswer={this.deleteChAnswer}
              deleteReply={this.deleteReply}
              fetchModifyQuestion={this.props.fetchModifyQuestion}
              fetchModifyAnswer={this.props.fetchModifyAnswer}
            />
            <div id="markdown">
              <h1> add an answer </h1>
              <div className="mark_down_box">
                <div className="mark_down_input">
                  <h2>입력창</h2>
                  <textarea
                    className="mark_down_input_item"
                    placeholder="답변을 입력 하세요"
                    name="content"
                    onChange={e => this.changeValue(e)}
                    id="markdownvalue"
                    cols="70"
                    rows="30"
                  />
                </div>
                <div className="mark_down_view">
                  <h2>미리보기</h2>
                  <ReactMarkDown className="mark_down_view_item" source={this.state.src} />
                </div>
              </div>

              <div className="mark_down_btn">
                <button
                  onClick={() => this.postAnswer()}
                  className="btn btn-primary mark_down_btn_item"
                >
                  답변하기
                </button>
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
  question: state.questions.item,
  loading: state.questions.loading,
  myID: state.verify.userID,
});

// export default 커넥트(mapStateToProps, { action에 정의된 함수 })(해당 컴포넌트)
export default connect(mapStateToProps, {
  fetchQuestionEntry,
  fetchModifyQuestion,
  fetchModifyAnswer,
  Verify,
})(QuestionEntryContainer);
