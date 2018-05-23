import React, { Component } from 'react';
import { connect } from 'react-redux';

import QuestionList from '../../components/body/question/QuestionList';
import { fetchQuestionList, fetchSortedByTag } from '../../redux/actions/questionAction';

class QuestionListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: true,
      currentPage: 1,
      start: 0,
      end: 10,
    };
    // this.props.fetchQuestionList.bind(this);
  }

  componentDidMount() {
    this.makeAsync(1);
  }

  componentWillReceiveProps() {
    if (!this.props.loading) this.setState({ first: false });
  }

  updateStartEndPage = (start, end) => {
    this.setState({
      start,
      end,
    });
  };

  updateCurrentPage = (index) => {
    this.setState({
      currentPage: index,
    });
    this.addClassToCurrentPage(index);
  };

  addClassToCurrentPage = (index) => {
    const element = document.getElementById(String(index));
    element.classList.add('current');
  };

  makeAsync = async (index) => {
    await this.props.fetchQuestionList.bind(this, index)();
    this.updateCurrentPage(index);
  };

  /* eslint no-nested-ternary: 0 */
  render() {
    const { loading, questions, fetchSortedByTag } = this.props;
    const {
      currentPage, start, end, first,
    } = this.state;
    console.log(questions);
    return (
      <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : first ? (
          <h1>Loading...</h1>
        ) : (
          <QuestionList
            posts={questions}
            makeAsync={this.makeAsync}
            updateStartEndPage={this.updateStartEndPage}
            currentPage={currentPage}
            start={start}
            end={end}
            fetchSortedByTag={fetchSortedByTag}
          />
        )}
      </div>
    );
  }
}

// 원하는이름 : state.(Reducer/index.js 정의한 이름).(initialState 해당 이름)
const mapStateToProps = state => ({
  questions: state.questions.items,
  loading: state.questions.loading,
  error: state.questions.error,
});

// export default 커넥트(mapStateToProps, { action에 정의된 함수 })(해당 컴포넌트)
export default connect(mapStateToProps, { fetchQuestionList, fetchSortedByTag })(QuestionListContainer);
