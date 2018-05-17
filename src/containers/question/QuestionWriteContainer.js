import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RichEditor from './RichEditor';
import { EditorState, convertToRaw } from 'draft-js';

import QuestionWriteShowcase from '../../components/showcases/QuestionWriteShowcase';
import { fetchQuestionTag } from '../../redux/actions/questionAction';
import QuestionWrite from '../../components/body/question/QuestionWrite';

import '../../styles/css/RichEditor.css';
import '../../styles/css/QuestionWrite.css';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class QuestionWriteContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      editorState: EditorState.createEmpty(),
    };

    this.submit = this.submit.bind(this);
    this.onTagChange = this.onTagChange.bind(this);
  }

  async componentWillMount() {
    await this.props.fetchQuestionTag();
  }

  // 에디터
  onChange = (editorState) => {
    const contentState = editorState.getCurrentContent();
    console.log('content state', convertToRaw(contentState));
    this.setState({
      editorState,
    });
  };

  // 태그 선택 관련
  onTagChange(e) {
    // current array of options
    const { options } = this.state;
    let index;
    console.log(e.target);

    // Tag 3개 까지 선택
    if (e.target.checked) {
      if (options.length < 3) {
        options.push(e.target.value);
        console.log('options : ', options);
      } else if (options.includes(e.target.value)) {
        index = options.indexOf(e.target.value);
        options.splice(index, 1);
        console.log('options : ', options);
      } else {
        alert('최대 3개까지만 선택가능 합니다');
        e.target.checked = !e.target.checked;
        console.log('options : ', options);
      }
    } else {
      index = options.indexOf(e.target.value);
      options.splice(index, 1);
      console.log('options : ', options);
    }
    this.setState({ options });
  }
  // *************************************************** editor 관련
  // onChange = (editorState) => {
  //   const contentState = editorState.getCurrentContent();
  //   console.log('content state', convertToRaw(contentState));
  //   this.setState({
  //     editorState,
  //   });
  // };

  // this.logState = () => {
  //   const content = this.state.editorState.getCurrentContent();
  //   console.log(convertToRaw(content));
  // };
  // *************************************************** editor 관련

  // 작성 글 제출
  submit() {
    console.log('무시', this);

    if (this.state.options.length === 0) {
      alert('태그를 선택해 주세요');
      return;
    }

    const config = {
      headers: {
        'x-access-token': localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
    };
    const data = {
      body: 'testing... i am hanyoungjae',
    };
    data.title = document.getElementsByClassName('inputTitle')[0].value;

    // 제목 입력 예외처리
    if (data.title.length === 0) {
      alert('제목을 입력해 주세요');
      return;
    }
    data.reward = Number(document.getElementsByClassName('inputReward')[0].value);
    data.tags = this.state.options;
    const writingUrl = 'http://localhost:3001/api/question/post';
    axios
      .post(writingUrl, data, config)
      .then((res) => {
        this.props.history.push('/question');
      })
      .catch(err => alert(err));
  }

  render() {
    const { tags } = this.props;
    return (
      <div className="QuestionWriteContainer">
        <QuestionWriteShowcase />
        <QuestionWrite tags={tags} onTagChange={this.onTagChange} />
        <div>
          {/* <Editor
            className="sample"
            editorState={this.state.editorState}
            onChange={this.onChange}
          /> */}
          <RichEditor onChange={this.onChange} editorState={this.state.editorState} />
        </div>
        <button
          onClick={() => this.submit()}
          className="btn btn-primary authSubmitBtn QuestionWriteButton"
        >
          질문 작성하기
        </button>
      </div>
    );
  }
}

QuestionWriteContainer.propTypes = {
  fetchQuestionTag: PropTypes.func.isRequired,
  tags: PropTypes.array.isRequired,
};

// 원하는이름 : state.(Reducer/index.js 정의한 이름).(initialState 해당 이름)
const mapStateToProps = state => ({
  tags: state.questions.tags,
});

// export default 커넥트(mapStateToProps, { action에 정의된 함수 })(해당 컴포넌트)
export default connect(mapStateToProps, { fetchQuestionTag })(QuestionWriteContainer);
