import React, { Component } from 'react';
import Forum from '../components/routes/Forum';

class ForumContainer extends Component {
  state = {};
  render() {
    const array = [
      { id: 0, title: '포럼1', body: '나는 바디1' },
      { id: 1, title: '포럼2', body: '나는 바디2' },
      { id: 2, title: '포럼3', body: '나는 바디3' },
      { id: 3, title: '포럼4', body: '나는 바디4' },
      { id: 4, title: '포럼5', body: '나는 바디4' },
      { id: 5, title: '포럼6', body: '나는 바디4' },
      { id: 6, title: '포럼7', body: '나는 바디4' },
      { id: 7, title: '포럼8', body: '나는 바디4' },
    ];
    return <Forum data={array} />;
  }
}

export default ForumContainer;
