import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// REDUX
import { Provider } from 'react-redux';
import store from './redux/store';
import {
  Footer,
  Home,
  Tag,
  Rank,
  Job,
  NoMatch,
  Clause,
  Information,
  HelpDesk,
} from './components';
import { HeaderContainer, Forum, Question, SignUpContainer, LoginContainer } from './containers';
import './styles/css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(store.getState());
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <HeaderContainer />
            <div className="middle">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/forum" component={Forum} />
                <Route path="/question" component={Question} />
                <Route path="/tag" component={Tag} />
                <Route path="/rank" component={Rank} />
                <Route path="/job" component={Job} />
                <Route path="/auth" component={LoginContainer} />
                <Route path="/clause" component={Clause} />
                <Route path="/information" component={Information} />
                <Route path="/helpdesk" component={HelpDesk} />
                <Route path="/signup" component={SignUpContainer} />
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
