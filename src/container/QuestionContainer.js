import React, { Component } from 'react';
import Question from '../components/routes/question/Question';

class QuestionContainer extends Component {
  state = {};
  render() {
    const array = [
      { title: '타이틀1', body: '나는 바디1' },
      { title: '타이틀2', body: '나는 바디2' },
      { title: '타이틀3', body: '나는 바디3' },
      { title: '타이틀4', body: '나는 바디4' },
    ];
    return <Question data={array} />;
  }
}

export default QuestionContainer;
