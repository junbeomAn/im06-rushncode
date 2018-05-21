import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import QuestionListContainer from './QuestionListContainer';
import QuestionEntryContainer from './QuestionEntryContainer';
import QuestionWriteContainer from './QuestionWriteContainer';
import { Verify } from './../../redux/actions/verifyAction';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }  

  componentDidMount() {
    this.props.Verify();
  }

  render() {
    const { match } = this.props;
    console.log(this.props.isLoggedIn);
    return (
      <Switch>
        <Route
          path={`${match.path}/write`}
          render={(props) => {
            return this.props.isLoggedIn ? <QuestionWriteContainer {...props} /> : <Redirect to="/auth/signin" />;
          }} />
        <Route component={QuestionEntryContainer} path={`${match.path}/:id`} />
        <Route component={QuestionListContainer} path={`${match.path}/`} />
      </Switch>
    );
  }
}

const mapStateToProps = (state) => {
  const { isLoggedIn } = state.verify;
  return { isLoggedIn };
};

export default connect(mapStateToProps, { Verify })(Question);

