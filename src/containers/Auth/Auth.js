import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginContainer from './LoginContainer';
import SignUpContainer from './SignUpContainer';
import Github from '../../components/body/GithubAuth';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { match } = this.props;
    return (
      <Switch>
        <Route component={LoginContainer} path={`${match.path}/signin`} />
        <Route component={SignUpContainer} path={`${match.path}/signup`} />
        <Route component={Github} path={`${match.path}/github`} />
      </Switch>
    );
  }
}

export default Auth;
