import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
  QuestionList,
  ForumList,
} from './components';
import { QuestionContainer, ForumContainer } from './container';
// import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div className="Box">
          <div className="Header">
            <Header />
          </div>
          <div className="body">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/forum/:id" component={ForumList} />
              <Route path="/forum" component={ForumContainer} />
              <Route path="/question/:id" component={QuestionList} />
              <Route path="/question" component={QuestionContainer} />
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
          <div className="Footer">
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

// componentDidMount() {
//   this.getData();
// }

// getData = () => {
//   axios
//     .get('http://localhost:3300/data')
//     .then(res =>
//       this.setState({
//         data: res.data,
//       }))
//     .catch(err => console.log(err));
// };
