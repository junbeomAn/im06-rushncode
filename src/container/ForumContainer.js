import React, { Component } from 'react';
import Forum from '../components/routes/Forum';

class ForumContainer extends Component {
  state = {};
  render() {
    const array = [
      { title: '포럼1', body: '나는 바디1' },
      { title: '포럼2', body: '나는 바디2' },
      { title: '포럼3', body: '나는 바디3' },
      { title: '포럼4', body: '나는 바디4' },
      { title: '포럼5', body: '나는 바디4' },
      { title: '포럼6', body: '나는 바디4' },
      { title: '포럼7', body: '나는 바디4' },
      { title: '포럼8', body: '나는 바디4' },
    ];
    return <Forum data={array} />;
  }
}

export default ForumContainer;
