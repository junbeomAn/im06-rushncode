import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Header,
  Footer,
  Home,
  Forum,
  Question,
  Tag,
  Rank,
  Job,
  Auth,
  NoMatch,
  Clause,
  Information,
  HelpDesk,
} from './components';
// import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/forum" component={Forum} />
              <Route path="/question" component={Question} />
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
