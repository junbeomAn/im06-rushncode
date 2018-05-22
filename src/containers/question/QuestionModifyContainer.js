import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactMarkDown from 'react-markdown';
import axios from 'axios';

import {
  fetchQuestionEntry,
  fetchModifyAnswer,
  onBodyChange,
} from '../../redux/actions/questionAction';

export class QuestionModifyContainer extends Component {
  postModifiedAnswer = () => {
    const { id } = this.props.match.params;
    const config = {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    };
    const data = {
      answerID: id,
      body: this.props.body,
    };
    if (!data.body) return alert('내용을 입력해주세요');
    axios
      .post('http://localhost:3001/api/question/modifyanswer', data, config)
      .then((res) => {
        this.props.history.push(`/question/${res.data.questionID}`);
      })
      .catch((err) => {
        throw err;
      });
  };

  render() {
    const { body, onBodyChange } = this.props;
    console.log(this.props.match);
    return (
      <div className="QuestionModifyContainer">
        <div id="markdown">
          <h1> 답변 수정하기 </h1>
          <div className="mark_down_box">
            <div className="mark_down_input">
              <h2>입력창</h2>
              <textarea
                className="mark_down_input_item"
                placeholder="답변을 입력 하세요"
                name="content"
                onChange={e => onBodyChange(e)}
                id="markdownvalue"
                value={body}
                cols="70"
                rows="30"
              />
            </div>
            <div className="mark_down_view">
              <h2>미리보기</h2>
              <ReactMarkDown className="mark_down_view_item" source={body} />
            </div>
          </div>

          <div className="mark_down_btn">
            <button
              onClick={() => this.postModifiedAnswer()}
              className="btn btn-primary mark_down_btn_item"
            >
              수정하기
            </button>
          </div>
        </div>
      </div>
    );
  }
}
// 원하는이름 : state.(Reducer/index.js 정의한 이름).(initialState 해당 이름)
const mapStateToProps = state => ({
  body: state.questions.body,
});

// export default 커넥트(mapStateToProps, { action에 정의된 함수 })(해당 컴포넌트)
export default connect(mapStateToProps, { fetchModifyAnswer, fetchQuestionEntry, onBodyChange })(QuestionModifyContainer);
