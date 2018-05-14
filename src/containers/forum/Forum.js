import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ForumListContainer from './ForumListContainer';
import ForumEntryContainer from './ForumEntryContainer';

class Forum extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { match } = this.props;
    return (
      <Switch>
        <Route component={ForumEntryContainer} path={`${match.path}/:id`} />
        <Route component={ForumListContainer} path={`${match.path}`} />
      </Switch>
    );
  }
}

export default Forum;
