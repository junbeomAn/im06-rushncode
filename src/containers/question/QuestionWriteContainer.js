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
    // const ABI = [
    //   {
    //     constant: false,
    //     inputs: [],
    //     name: 'newCookie',
    //     outputs: [
    //       {
    //         name: 'newContract',
    //         type: 'address',
    //       },
    //     ],
    //     payable: false,
    //     stateMutability: 'nonpayable',
    //     type: 'function',
    //   },
    //   {
    //     inputs: [],
    //     payable: false,
    //     stateMutability: 'nonpayable',
    //     type: 'constructor',
    //   },
    //   {
    //     constant: true,
    //     inputs: [
    //       {
    //         name: '',
    //         type: 'uint256',
    //       },
    //     ],
    //     name: 'contracts',
    //     outputs: [
    //       {
    //         name: '',
    //         type: 'address',
    //       },
    //     ],
    //     payable: false,
    //     stateMutability: 'view',
    //     type: 'function',
    //   },
    //   {
    //     constant: true,
    //     inputs: [],
    //     name: 'getContractCount',
    //     outputs: [
    //       {
    //         name: 'contractCount',
    //         type: 'uint256',
    //       },
    //     ],
    //     payable: false,
    //     stateMutability: 'view',
    //     type: 'function',
    //   },
    //   {
    //     constant: true,
    //     inputs: [],
    //     name: 'owner',
    //     outputs: [
    //       {
    //         name: '',
    //         type: 'address',
    //       },
    //     ],
    //     payable: false,
    //     stateMutability: 'view',
    //     type: 'function',
    //   },
    // ];
    // const MyContract = window.web3.eth.contract(ABI);

    this.state = {
      options: [],
      // ContractInstance: MyContract.at('0xe9856d4d0daa8d73b54f345c48bf7297d927c4fc'),
    };
  }

  async componentWillMount() {
    await this.props.fetchQuestionTag();
  }

  /** *****************************************************************
                              이더리움 DAPP 시작
  ******************************************************************* */
  // newCookie = () => {
  //   const { newCookie } = this.state.ContractInstance;
  //   newCookie(
  //     {
  //       gas: 1000000,
  //     },
  //     (err, c) => {
  //       if (err) console.error('An err occured::::', err);
  //       console.log('newCokkie!!:::', c);
  //     },
  //   );
  // };

  // getQuestioner = () => {
  //   const { getQuestioner } = this.state.ContractInstance;
  //   getQuestioner((err, questioner) => {
  //     if (err) console.error('An eeor occured::::', err);
  //     console.log("This is our contract's questioner::::", questioner);
  //   });
  // };

  // getRecipient = () => {
  //   const { getRecipient } = this.state.ContractInstance;
  //   getRecipient((err, recipient) => {
  //     if (err) console.error('An eeor occured::::', err);
  //     console.log("This is our contract's recipient::::", recipient);
  //   });
  // };

  // getReward = () => {
  //   const { getReward } = this.state.ContractInstance;
  //   getReward((err, reward) => {
  //     if (err) console.error('An eeor occured::::', err);
  //     console.log("This is our contract's reward::::", reward);
  //   });
  // };

  // getPending = () => {
  //   const { getPending } = this.state.ContractInstance;
  //   getPending((err, pending) => {
  //     if (err) console.error('An eeor occured::::', err);
  //     console.log("This is our contract's pending::::", pending);
  //   });
  // };

  // setRecipient = () => {
  //   const { setRecipient } = this.state.ContractInstance;
  //   setRecipient(
  //     '0xEB06396B746f0B22981D0BeCBf24435626251204',
  //     {
  //       gas: 400000,
  //       from: window.web3.eth.accounts[0],
  //       value: window.web3.toWei(0.01, 'ether'),
  //     },
  //     (err, result) => {
  //       console.log('Smart contract state is changing');
  //     },
  //   );
  // };

  // dealConclusion = () => {
  //   const { dealConclusion } = this.state.ContractInstance;
  //   dealConclusion(
  //     {
  //       gas: 400000,
  //     },
  //     (err) => {
  //       if (err) console.error('An err occured::::', err);
  //       console.log('Transfer to Recipient!!');
  //     },
  //   );
  // };

  // dealBreak = () => {
  //   const { dealBreak } = this.state.ContractInstance;
  //   dealBreak(
  //     {
  //       gas: 400000,
  //     },
  //     (err) => {
  //       if (err) console.error('An err occured::::', err);
  //       console.log('Transfer to Recipient!!');
  //     },
  //   );
  // };

  // makeQuestion = () => {
  //   const { question } = this.state.ContractInstance;
  //   question(
  //     {
  //       gas: 400000,
  //       from: window.web3.eth.accounts[0],
  //       value: window.web3.toWei(this.props.reward, 'ether'),
  //     },
  //     (err, result) => {
  //       this.submit();
  //     },
  //   );
  // };
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
      newCookie,
      makeQuestion,
      getQuestioner,
      getRecipient,
      getReward,
      getPending,
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
                    makeQuestion(reward);
                    this.submit();
                  }}
                  className="btn btn-primary mark_down_btn_item write-btn"
                >
                  질문작성
                </button>
              )}
              <button
                onClick={() => {
                  getQuestioner();
                  getRecipient();
                  getReward();
                  getPending();
                }}
              >
                get
              </button>
              {/* <button
                onClick={() => {
                  setRecipient();
                }}
              >
                setRecipient
              </button>
              <button
                onClick={() => {
                  dealConclusion();
                }}
              >
                dealConclusion
              </button>
              <button
                onClick={() => {
                  this.dealBreak();
                }}
              >
                dealBreak
              </button> */}
              <button
                onClick={() => {
                  this.props.newCookie();
                }}
              >
                newCookie
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
