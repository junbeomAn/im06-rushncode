import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
// REDUX
import { Provider } from 'react-redux';
import store from './redux/store';
import { NoMatch, Clause, Loadingpage } from './components';
import {
  HeaderContainer,
  Question,
  Auth,
  MyPage,
  Home,
  Footer,
  TagContainer,
  RankContainer,
  Sidebar,
} from './containers';
import QuestionListContainer from './containers/question/QuestionListContainer';
import './styles/styleIndex';

class App extends Component {
  state = {
    sidebarOpen: false,
  };

  handleMenuButtonClick = () => {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen,
    });
  };

  closeMenuButtonClick = () => {
    this.setState({
      sidebarOpen: false,
    });
  };

  render() {
    const { sidebarOpen } = this.state;
    const sidebarClassName = sidebarOpen ? 'home-side-menu open' : 'home-side-menu';
    const sidebarCloseBtn = sidebarOpen ? 'sidebar-btn sidebar-close active' : 'sidebar-btn sidebar-close inactive';
    const sidebarOpenBtn = !sidebarOpen ? 'sidebar-btn active' : 'sidebar-btn inactive';
    
    console.log(sidebarOpen);
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <HeaderContainer />
            <div className="sidebar-header">
              <Icon size="big" name="sidebar" className={sidebarOpenBtn} onClick={this.handleMenuButtonClick} />
              {/* <Icon size="big" name="close" className={sidebarCloseBtn} onClick={this.closeMenuButtonClick} /> */}
            </div>
            <Sidebar sidebarClassName={sidebarClassName} closeMenuButtonClick={this.closeMenuButtonClick} sidebarCloseBtn={sidebarCloseBtn} sidebarOpen={sidebarOpen} />
            <div className="middle">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/mypage/:userID" component={MyPage} />
                <Route path="/question" component={Question} />
                <Route path="/tag" component={TagContainer} />
                <Route path="/rank" component={RankContainer} />
                <Route path="/auth" component={Auth} />
                <Route path="/clause" component={Clause} />
                <Route path="/information" component={Clause} />
                <Route path="/search" component={QuestionListContainer} />
                <Route path="/sort" component={QuestionListContainer} />
                <Route path="/loading" component={Loadingpage} />
                <Route component={Sidebar} />
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
