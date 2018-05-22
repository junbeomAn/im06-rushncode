// import React, { Component } from 'react';
// import axios from 'axios';


// class Search extends React.Component {
//   state = {
//     data: '',
//   };

//   componentWillMount() {
//     const keyword = window.location.href.split('?q=')[1];
//     console.log(keyword);
//     // const searchUrl = 'http://localhost:3001/api/sort/search';
//     // const data = {
//     //   keyword: keyword,
//     // }
//     // axios
//     //   .post(searchUrl, data)
//     //   .then(res => console.log(res))
//     //   .catch(err => console.log(err));
//     axios
//       .get('http://localhost:3001/api/question/getlist/1')
//       .then(res => this.setState({
//         data: res.data.data,
//       }))
//       .catch(err => console.log(err));
//   }

//   render() {
//     const { data } = this.state;
//     console.log(data);
//     return (
//       <div>
//         {typeof data !== 'string' && data.map(item => <span>{item.title}</span>)}
//       </div>
//     );
//   }
// }

// export default Search;



import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import SearchQuestionList from '../../components/body/Search/SearchQuestionList';
import { getSearchResult } from '../../redux/actions/questionAction';

class Search extends Component {
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

  // componentWillMount() {
  //   const keyword = window.location.href.split('?q=')[1];
  //   console.log(keyword);
  //   const searchUrl = 'http://localhost:3001/api/sort/search';
  //   const data = {
  //     data: keyword,
  //   };
  //   axios
  //     .post(searchUrl, data)
  //     .then(res => console.log(res, '@@@@@@@@@@'))
  //     .catch(err => console.log(err));
  
  // }

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
    const keyword = window.location.href.split('?q=')[1];
    await this.props.getSearchResult.bind(this, index, keyword)();
    this.updateCurrentPage(index);
  };

  /* eslint no-nested-ternary: 0 */
  render() {
    const { loading, questions } = this.props;
    const {
      currentPage, start, end, first,
    } = this.state;
    console.log(questions)
    console.log(loading);
    return (
      <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : first ? (
          <h1>Loading...</h1>
        ) : (
          <SearchQuestionList
            posts={questions}
            makeAsync={this.makeAsync}
            updateStartEndPage={this.updateStartEndPage}
            currentPage={currentPage}
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
});

// export default 커넥트(mapStateToProps, { action에 정의된 함수 })(해당 컴포넌트)
export default connect(mapStateToProps, { getSearchResult })(Search);
