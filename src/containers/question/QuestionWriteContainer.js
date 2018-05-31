import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import ReactMarkDown from 'react-markdown';
import { Icon, Popup } from 'semantic-ui-react';
import { Web3Provider } from 'react-web3';

import QuestionWriteShowcase from '../../components/showcases/QuestionWriteShowcase';
import {
  fetchQuestionTag,
  onTitleChange,
  onRewardChange,
  onBodyChange,
  initWriteForm,
  fetchQuestionEntry,
} from '../../redux/actions/questionAction';
import MarkDownTip from '../../components/body/question/question-entry/MarkDownTip';
import QuestionWrite from '../../components/body/question/QuestionWrite';

import { URL_API } from '../../config';

// import web3, { selectContractInstance, mapReponseToJSON } from '../../web3';

class QuestionWriteContainer extends Component {
  constructor(props) {
    super(props);
    const ABI = [
      {
        constant: true,
        inputs: [],
        name: 'questioner',
        outputs: [
          {
            name: '',
            type: 'address',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'getRecipient',
        outputs: [
          {
            name: '',
            type: 'address',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'reward',
        outputs: [
          {
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_recipient',
            type: 'address',
          },
        ],
        name: 'setRecipient',
        outputs: [],
        payable: true,
        stateMutability: 'payable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'getReward',
        outputs: [
          {
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [],
        name: 'question',
        outputs: [],
        payable: true,
        stateMutability: 'payable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [],
        name: 'dealBreak',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: '',
            type: 'address',
          },
        ],
        name: 'pending',
        outputs: [
          {
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'recipient',
        outputs: [
          {
            name: '',
            type: 'address',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'getQuestioner',
        outputs: [
          {
            name: '',
            type: 'address',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [],
        name: 'dealConclusion',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
    ];
    const MyContract = window.web3.eth.contract(ABI);

    this.state = {
      options: [],
      ContractInstance: MyContract.at('0xf66cad008d6c4a538448eeaa7ef8dc5f5c75b5ae'),
    };
  }

  async componentWillMount() {
    await this.props.fetchQuestionTag();
  }

  /** *****************************************************************
                              이더리움 DAPP 시작
  ******************************************************************* */
  getQuestioner = () => {
    const { getQuestioner } = this.state.ContractInstance;

    getQuestioner((err, questioner) => {
      if (err) console.error('An eeor occured::::', err);
      console.log("This is our contract's questioner::::", questioner);
    });
  };

  getRecipient = () => {
    const { getRecipient } = this.state.ContractInstance;
    getRecipient((err, recipient) => {
      if (err) console.error('An eeor occured::::', err);
      console.log("This is our contract's recipient::::", recipient);
    });
  };

  getReward = () => {
    const { getReward } = this.state.ContractInstance;
    getReward((err, reward) => {
      if (err) console.error('An eeor occured::::', err);
      console.log("This is our contract's reward::::", reward);
    });
  };

  setRecipient = () => {
    const { setRecipient } = this.state.ContractInstance;
    setRecipient(
      window.web3.eth.accounts[0],
      {
        gas: 400000,
        from: window.web3.eth.accounts[0],
        value: window.web3.toWei(0.01, 'ether'),
      },
      (err, result) => {
        console.log('Smart contract state is changing');
      },
    );
  };

  makeQuestion = () => {
    const { question } = this.state.ContractInstance;
    question(
      {
        gas: 400000,
        from: window.web3.eth.accounts[0],
        value: window.web3.toWei(this.props.reward, 'ether'),
      },
      (err, result) => {
        this.submit();
      },
    );
  };
  /** *****************************************************************
                              이더리움 DAPP 종료
  ******************************************************************* */

  // 태그 선택 관련
  onTagChange = (e) => {
    // current array of options
    const { options } = this.state;
    let index;

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

  // 수정 글 제출
  postModifiedQuestion = () => {
    const { id } = this.props.match.params;
    const config = {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    };
    const data = {
      questionID: id,
      title: this.props.title,
      body: this.props.body,
      reward: this.props.reward,
    };
    if (!data.body) return alert('내용을 입력해주세요');
    axios
      .post(`${URL_API}/api/question/modifyquestion`, data, config)
      .then((res) => {
        console.log('답변 제출 응답 : ', res);
        this.props.history.push(`/question/${id}`);
      })
      .catch((err) => {
        throw err;
      });
  };

  // 작성 글 제출
  submit = () => {
    const { options } = this.state;
    const { title, body } = this.props;
    console.log(body);
    const reward = Number(this.props.reward);
    const config = {
      headers: {
        'x-access-token': localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
    };
    const writingUrl = `${URL_API}/api/question/post`;
    // 글 작성 정보 모두 담는 그릇 설정
    const data = {};
    // 태그 정보 담기 및  태그 선택 안할 시 예외 처리
    if (options.length === 0) return alert('태그를 선택해 주세요');
    data.tags = options;
    // 제목 담기 및 제목 없을 시 예외 처리
    data.title = title;
    if (data.title.length === 0) return alert('제목을 입력해 주세요');
    // 금액 담기
    data.reward = reward;
    if (isNaN(data.reward)) return alert('금액은 숫자이어야 합니다');
    if (data.reward.length === 0) return alert('금액을 입력해 주세요');
    // 내용 담기
    data.body = body;
    if (data.body.length === 0) return alert('내용을 입력해 주세요');
    axios
      .post(writingUrl, data, config)
      .then((res) => {
        this.props.initWriteForm();
        this.props.history.push('/question');
      })
      .catch(err => alert(err));
  };
  render() {
    const {
      tags,
      title,
      reward,
      body,
      onTitleChange,
      onRewardChange,
      onBodyChange,
      match,
    } = this.props;
    const { id } = match.params;
    return (
      <Web3Provider>
        <div className="QuestionWriteContainer">
          <QuestionWriteShowcase />
          <QuestionWrite
            tags={tags}
            title={title}
            reward={reward}
            isModify={id}
            onTagChange={this.onTagChange}
            onTitleChange={onTitleChange}
            onRewardChange={onRewardChange}
          />
          <div className="write-title">내용</div>
          <div id="markdown">
            <div className="mark_down_box">
              <div className="mark_down_input">
                <h2>입력창</h2>
                <textarea
                  className="mark_down_input_item"
                  placeholder="질문을 입력 하세요"
                  name="content"
                  value={body}
                  onChange={e => onBodyChange(e)}
                  id="markdownvalue"
                  cols="70"
                  rows="30"
                />
              </div>
              <div className="mark_down_view_wrapper">
                <div className="mark_down_view_top">
                  <h2>미리보기</h2>
                  <Popup
                    trigger={
                      <span className="mark_down_tip">
                        <Icon name="idea" />마크다운 팁
                      </span>
                    }
                    content={<MarkDownTip />}
                    on="click"
                    position="bottom left"
                    wide
                  />
                </div>
                <div className="mark_down_view">
                  <ReactMarkDown
                    className="mark_down_view_item"
                    source={body}
                    sourcePos
                    rawSourcePos
                  />
                </div>
              </div>
            </div>

            <div className="mark_down_btn">
              {id ? (
                <button
                  onClick={() => this.postModifiedQuestion()}
                  className="btn btn-primary mark_down_btn_item write-btn"
                >
                  질문수정
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.makeQuestion();
                  }}
                  className="btn btn-primary mark_down_btn_item write-btn"
                >
                  질문작성
                </button>
              )}
              <button
                onClick={() => {
                  this.getQuestioner();
                  // this.setRecipient();
                  this.getRecipient();
                  this.getReward();
                }}
              >
                get
              </button>
              <button
                onClick={() => {
                  this.setRecipient();
                }}
              >
                setRecipient
              </button>
            </div>
          </div>
        </div>
      </Web3Provider>
    );
  }
}

// 원하는이름 : state.(Reducer/index.js 정의한 이름).(initialState 해당 이름)
const mapStateToProps = state => ({
  tags: state.questions.tags,
  title: state.questions.title,
  reward: state.questions.reward,
  body: state.questions.body,
});

// export default 커넥트(mapStateToProps, { action에 정의된 함수 })(해당 컴포넌트)
export default connect(mapStateToProps, {
  fetchQuestionEntry,
  fetchQuestionTag,
  onTitleChange,
  onRewardChange,
  onBodyChange,
  initWriteForm,
})(QuestionWriteContainer);
