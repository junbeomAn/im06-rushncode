import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// REDUX
import { Provider } from 'react-redux';
import store from './redux/store';
import { Rank, NoMatch, Clause, Loadingpage } from './components';
import { HeaderContainer, Question, Auth, MyPage, Home, Footer, TagContainer } from './containers';
import QuestionListContainer from './containers/question/QuestionListContainer';
import './styles/styleIndex';

class App extends Component {
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
      ContractInstance: MyContract.at('0xf66cad008d6c4a538448eeaa7ef8dc5f5c75b5ae'),
    };
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

  render() {
    // console.log('@@@@@@@@@@@@@@', process.env.REACT_APP_SETTING);
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <HeaderContainer />
            <div className="middle">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/mypage/:userID" component={MyPage} />
                <Route path="/question" component={Question} />
                <Route path="/tag" component={TagContainer} />
                <Route path="/rank" component={Rank} /> <Route path="/auth" component={Auth} />
                <Route path="/clause" component={Clause} />
                <Route path="/information" component={Clause} />
                <Route path="/search" component={QuestionListContainer} />
                <Route path="/sort" component={QuestionListContainer} />
                <Route path="/loading" component={Loadingpage} /> <Route component={NoMatch} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
