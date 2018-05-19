import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import ReactMarkDown from 'react-markdown';
import QuestionWriteShowcase from '../../components/showcases/QuestionWriteShowcase';
import { fetchQuestionTag } from '../../redux/actions/questionAction';
import QuestionWrite from '../../components/body/question/QuestionWrite';

import '../../styles/css/QuestionWrite.css';

class QuestionWriteContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      target: null,
      src: '',
    };
  }

  async componentWillMount() {
    await this.props.fetchQuestionTag();
  }

 

  // 태그 선택 관련
  onTagChange = (e) => {
    // current array of options
    const { options } = this.state;
    let index;
    // console.log(e.target);

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
  };

  changeValue = (e) => {
    e.preventDefault();
    this.setState({
      src: e.target.value,
    });
  }

  // 작성 글 제출
  submit = () => {
    const config = {
      headers: {
        'x-access-token': localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
    };
    const writingUrl = 'http://localhost:3001/api/question/post';

    // 글 작성 정보 모두 담는 그릇 설정
    const data = {};
    // 태그 정보 담기 및  태그 선택 안할 시 예외 처리
    if (this.state.options.length === 0) return alert('태그를 선택해 주세요');
    data.tags = this.state.options;
    // 제목 담기 및 제목 없을 시 예외 처리
    data.title = document.getElementsByClassName('inputTitle')[0].value;
    if (data.title.length === 0) return alert('제목을 입력해 주세요');
    // 금액 담기
    data.reward = Number(document.getElementsByClassName('inputReward')[0].value);
    // 내용 담기
    data.body = this.state.src;
    axios
      .post(writingUrl, data, config)
      .then((res) => {
        this.props.history.push('/question');
      })
      .catch(err => alert(err));
  };

  render() {
    const { tags } = this.props;
    console.log('src : ', this.state.src);
    return (
      <div className="QuestionWriteContainer">
        <QuestionWriteShowcase />
        <QuestionWrite tags={tags} onTagChange={this.onTagChange} />
        <div id="markdown">
          <textarea className="input_mark_down" placeholder="hello" name="content" onChange={e => this.changeValue(e)} id="markdownvalue" cols="70" rows="30" />
          <ReactMarkDown className="mark_down_view" source={this.state.src} />
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

// 원하는이름 : state.(Reducer/index.js 정의한 이름).(initialState 해당 이름)
const mapStateToProps = state => ({
  tags: state.questions.tags,
});

// export default 커넥트(mapStateToProps, { action에 정의된 함수 })(해당 컴포넌트)
export default connect(mapStateToProps, { fetchQuestionTag })(QuestionWriteContainer);
