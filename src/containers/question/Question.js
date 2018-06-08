import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import QuestionListContainer from './QuestionListContainer';
import QuestionEntryContainer from './QuestionEntryContainer';
import QuestionWriteContainer from './QuestionWriteContainer';
import QuestionModifyContainer from './QuestionModifyContainer';
import { Verify } from './../../redux/actions/verifyAction';
import { isChrome } from '../../browsercheck/index';

class Question extends Component {
  constructor(props) {
    super(props);
    const ABI = [
      {
        constant: false,
        inputs: [
          {
            name: '_key',
            type: 'uint32',
          },
        ],
        name: 'setQuestion',
        outputs: [],
        payable: true,
        stateMutability: 'payable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: '',
            type: 'uint32',
          },
        ],
        name: 'questions',
        outputs: [
          {
            name: 'questioner',
            type: 'address',
          },
          {
            name: 'recipient',
            type: 'address',
          },
          {
            name: 'reward',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: '_key',
            type: 'uint32',
          },
        ],
        name: 'getQuestion',
        outputs: [
          {
            name: '',
            type: 'address',
          },
          {
            name: '',
            type: 'address',
          },
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
            name: '_key',
            type: 'uint32',
          },
          {
            name: '_recipient',
            type: 'address',
          },
        ],
        name: 'setRecipientAndDealConclusion',
        outputs: [],
        payable: true,
        stateMutability: 'payable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'countQuestions',
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
        name: 'getQuestions',
        outputs: [
          {
            name: '',
            type: 'address[]',
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
            name: '_key',
            type: 'uint32',
          },
        ],
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
            type: 'uint256',
          },
        ],
        name: 'questionsArchive',
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
    ];
    const MyContract = isChrome && window.web3 ? window.web3.eth.contract(ABI) : '';
    this.state =
      isChrome && window.web3
        ? { ContractInstance: MyContract.at('0x005b032d947dc8964ff0469375d785da395d310b') }
        : '';
  }

  componentDidMount() {
    this.props.Verify();
  }
  /** *****************************************************************
                              이더리움 DAPP 시작
  ******************************************************************* */

  getQuestionArchive = () => {
    const { getQuestions } = this.state.ContractInstance;
    getQuestions((err, questions) => {
      if (err) console.error('An eeor occured::::', err);
      console.log("This is our contract's questionArchive::::", questions);
    });
  };

  getQuestion = (qID) => {
    const { getQuestion } = this.state.ContractInstance;
    getQuestion(Number(qID), (err, question) => {
      if (err) console.error('An eeor occured::::', err);
      console.log("This is our contract's question::::", question);
    });
  };

  setRecipient = (metaAddress) => {
    const { setRecipient } = this.state.ContractInstance;
    console.log('metaAddress::::', metaAddress);
    setRecipient(
      metaAddress,
      {
        gas: 400000,
        from: window.web3.eth.accounts[0],
        value: window.web3.toWei(0.01, 'ether'),
      },
      (err, result) => {
        console.log('Smart contract recipient is changing...');
        this.dealConclusion();
      },
    );
  };

  dealConclusion = (qID, metaAddress) => {
    const { setRecipientAndDealConclusion } = this.state.ContractInstance;
    setRecipientAndDealConclusion(
      Number(qID),
      metaAddress,
      {
        gas: 400000,
        from: window.web3.eth.accounts[0],
        value: window.web3.toWei(0.01, 'ether'),
      },
      (err) => {
        if (err) console.error('An err occured::::', err);
        console.log('@@@@@ Set Recipient & Transfer to Recipient!! @@@@@');
      },
    );
  };

  dealBreak = (qID) => {
    const { dealBreak } = this.state.ContractInstance;
    console.log('@#!@!$!@#!@#!', qID);
    dealBreak(
      Number(qID),
      {
        gas: 400000,
      },
      (err) => {
        if (err) console.error('An err occured::::', err);
        console.log('Transfer to Recipient!!');
      },
    );
  };

  makeQuestion = (reward, qID) => {
    const { setQuestion } = this.state.ContractInstance;
    setQuestion(
      Number(qID),
      {
        gas: 400000,
        from: window.web3.eth.accounts[0],
        value: window.web3.toWei(reward, 'ether'),
      },
      (err, result) => {
        console.log('question is making...');
      },
    );
  };
  /** *****************************************************************
                              이더리움 DAPP 종료
  ******************************************************************* */

  render() {
    const { match } = this.props;
    return (
      <Switch>
        <Route component={QuestionModifyContainer} path={`${match.path}/modify/:id`} />
        <Route component={QuestionWriteContainer} path={`${match.path}/write/:id`} />
        <Route
          render={({ match, history }) => (
            <QuestionWriteContainer
              makeQuestion={this.makeQuestion}
              getQuestionArchive={this.getQuestionArchive}
              getQuestion={this.getQuestion}
              match={match}
              history={history}
            />
          )}
          path={`${match.path}/write`}
        />
        <Route
          render={({ match, history }) => (
            <QuestionEntryContainer
              dealConclusion={this.dealConclusion}
              dealBreak={this.dealBreak}
              match={match}
              history={history}
            />
          )}
          path={`${match.path}/:id`}
        />
        <Route component={QuestionListContainer} path={`${match.path}/`} />
      </Switch>
    );
  }
}

const mapStateToProps = (state) => {
  const { isLoggedIn } = state.verify;
  return { isLoggedIn };
};

export default connect(mapStateToProps, { Verify })(Question);
