import React, { Component } from 'react';
import { connect } from 'react-redux';

import QuestionList from '../../components/body/question/QuestionList';
import {
  fetchQuestionList,
  fetchSortedByTag,
  getSearchResult,
  getSortedResult,
} from '../../redux/actions/questionAction';
import { updateCurrPage, updateStartEndPage } from '../../redux/actions/pagenationAction';

class QuestionListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: true,
    };
  }

  componentDidMount() {
    this.makeAsync(1);
  }

  componentWillReceiveProps() {
    if (!this.props.loading) this.setState({ first: false });
  }

  addClassToCurrentPage = (index, keyword) => {
    const element = document.getElementById(keyword ? `p${keyword}${index}` : `p${index}`);
    element.classList.add('current');
  };

  makeAsync = async (index) => {
    const url = window.location.href;
    const keyword = decodeURI(url).split('?q=')[1];
    const sortKeyword = url.split('sort/')[1];
    const sortByTag = url.split('tag/')[1];
    if (keyword) {
      await this.props.getSearchResult.bind(this, index, keyword)();
    } else if (sortByTag) {
      await this.props.fetchSortedByTag.bind(this, sortByTag, index)();
    } else if (sortKeyword) {
      await this.props.getSortedResult.bind(this, index, sortKeyword)();
    } else {
      await this.props.fetchQuestionList.bind(this, index)();
    }
    this.props.updateCurrPage(index);
    this.addClassToCurrentPage(index, keyword);
  };

  sortBy = () => {};

  /* eslint no-nested-ternary: 0 */
  render() {
    const {
      loading, questions, current, start, end,
    } = this.props;
    const { first } = this.state;
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
            updateStartEndPage={this.props.updateStartEndPage}
            currentPage={current}
            start={start}
            end={end}
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
  current: state.pagenation.current,
  start: state.pagenation.start,
  end: state.pagenation.end,
});

// export default 커넥트(mapStateToProps, { action에 정의된 함수 })(해당 컴포넌트)
export default connect(mapStateToProps, {
  fetchQuestionList,
  fetchSortedByTag,
  getSearchResult,
  updateCurrPage,
  updateStartEndPage,
  getSortedResult,
})(QuestionListContainer);
