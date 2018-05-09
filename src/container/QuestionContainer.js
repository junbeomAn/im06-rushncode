import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import Question from '../components/routes/Question';

class QuestionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const array = [
      { id: 0, title: '타이틀1', body: '나는 바디1' },
      { id: 1, title: '타이틀2', body: '나는 바디2' },
      { id: 2, title: '타이틀3', body: '나는 바디3' },
      { id: 3, title: '타이틀4', body: '나는 바디4' },
    ];
    return (
      <div>
        <Question data={array} />
      </div>
    );
  }
}

export default QuestionContainer;
