import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import QuestList from '../../components/body/question/QuestList';
import { fetchQuestions } from '../../store/actions/questionAction';

class QuestListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentWillMount() {
    await this.props.fetchQuestions();
  }

  render() {
    const posts = this.props.questions;
    return <div>{posts !== undefined ? <QuestList posts={posts} /> : <h1>Loading...</h1>}</div>;
  }
}

QuestListContainer.propTypes = {
  fetchQuestions: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired,
};

// 원하는이름 : state.(Reducer/index.js 정의한 이름).(initialState 해당 이름)
const mapStateToProps = state => ({
  questions: state.questions.items,
});

// export default 커넥트(mapStateToProps, { action에 정의된 함수 })(해당 컴포넌트)
export default connect(mapStateToProps, { fetchQuestions })(QuestListContainer);
