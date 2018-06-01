import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import QuestionListContainer from './QuestionListContainer';
import QuestionEntryContainer from './QuestionEntryContainer';
import QuestionWriteContainer from './QuestionWriteContainer';
import QuestionModifyContainer from './QuestionModifyContainer';
import { Verify } from './../../redux/actions/verifyAction';

class Question extends Component {
  constructor(props) {
    super(props);
    const ABI = [
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
        constant: false,
        inputs: [],
        name: 'dealConclusion',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
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
        inputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        constant: true,
        inputs: [],
        name: 'getOwner',
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
        name: 'getPending',
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
        constant: true,
        inputs: [],
        name: 'owner',
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
    ];
    const MyContract = window.web3.eth.contract(ABI);
    this.state = { ContractInstance: MyContract.at('0x2ddaeb6630eaa714c4c4e04eb515ef05c2556308') };
  }

  componentDidMount() {
    this.props.Verify();
  }
  /** *****************************************************************
                              이더리움 DAPP 시작
  ******************************************************************* */
  newCookie = () => {
    const { newCookie } = this.state.ContractInstance;
    newCookie(
      {
        gas: 1000000,
      },
      (err, c) => {
        if (err) console.error('An err occured::::', err);
        console.log('newCokkie!!:::', c);
      },
    );
  };

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

  getPending = () => {
    const { getPending } = this.state.ContractInstance;
    getPending((err, pending) => {
      if (err) console.error('An eeor occured::::', err);
      console.log("This is our contract's pending::::", pending);
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

  dealConclusion = () => {
    const { dealConclusion } = this.state.ContractInstance;
    dealConclusion(
      {
        gas: 400000,
      },
      (err) => {
        if (err) console.error('An err occured::::', err);
        console.log('Transfer to Recipient!!');
      },
    );
  };

  dealBreak = () => {
    const { dealBreak } = this.state.ContractInstance;
    dealBreak(
      {
        gas: 400000,
      },
      (err) => {
        if (err) console.error('An err occured::::', err);
        console.log('Transfer to Recipient!!');
      },
    );
  };

  makeQuestion = (reward) => {
    const { question } = this.state.ContractInstance;
    question(
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
              newCookie={this.newCookie}
              makeQuestion={this.makeQuestion}
              getQuestioner={this.getQuestioner}
              getRecipient={this.getRecipient}
              getReward={this.getReward}
              getPending={this.getPending}
              match={match}
              history={history}
            />
          )}
          path={`${match.path}/write`}
        />
        <Route
          render={({ match, history }) => (
            <QuestionEntryContainer
              setRecipient={this.setRecipient}
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
