import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// REDUX
import { Provider } from 'react-redux';
import store from './store/store';
import {
  Header,
  Footer,
  Home,
  Tag,
  Rank,
  Job,
  Auth,
  NoMatch,
  Clause,
  Information,
  HelpDesk,
} from './components';
import {
  QuestListContainer,
  ForumListContainer,
  QuestContainer,
  ForumContainer,
  QuestWriteContainer,
} from './container';
import './styles/css/App.css';

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
            <Header />
            <div className="middle">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/forum/:id" component={ForumContainer} />
                <Route path="/forum" component={ForumListContainer} />
                <Route path="/question/write" component={QuestWriteContainer} />
                <Route path="/question/:id" component={QuestContainer} />
                <Route path="/question" component={QuestListContainer} />
                <Route path="/tag" component={Tag} />
                <Route path="/rank" component={Rank} />
                <Route path="/job" component={Job} />
                <Route path="/auth" component={Auth} />
                <Route path="/clause" component={Clause} />
                <Route path="/information" component={Information} />
                <Route path="/helpdesk" component={HelpDesk} />
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
