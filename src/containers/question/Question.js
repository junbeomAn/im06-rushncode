import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import QuestionListContainer from './QuestionListContainer';
import QuestionEntryContainer from './QuestionEntryContainer';
import QuestionWriteContainer from './QuestionWriteContainer';
import QuestionModifyContainer from './QuestionModifyContainer';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { match } = this.props;
    return (
      <Switch>
        <Route component={QuestionModifyContainer} path={`${match.path}/modify/:id`} />
        <Route component={QuestionWriteContainer} path={`${match.path}/write/:id`} />
        <Route component={QuestionWriteContainer} path={`${match.path}/write`} />
        <Route component={QuestionEntryContainer} path={`${match.path}/:id`} />
        <Route component={QuestionListContainer} path={`${match.path}/`} />
      </Switch>
    );
  }
}

export default Question;
