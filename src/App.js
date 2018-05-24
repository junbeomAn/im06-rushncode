import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// REDUX
import { Provider } from 'react-redux';
import store from './redux/store';
import { Tag, Rank, NoMatch, Clause } from './components';
import { HeaderContainer, Question, Auth, MyPage, Home, Footer } from './containers';
import QuestionListContainer from './containers/question/QuestionListContainer';
import './styles/styleIndex';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
                <Route path="/tag" component={Tag} />
                <Route path="/rank" component={Rank} />
                <Route path="/auth" component={Auth} />
                <Route path="/clause" component={Clause} />
                <Route path="/information" component={Clause} />
                <Route path="/search" component={QuestionListContainer} />   
                <Route path="/sort" component={QuestionListContainer} />    
                <Route component={NoMatch} />
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
