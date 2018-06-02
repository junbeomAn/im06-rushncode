import React, { Component } from 'react';
import { Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchQuestionTag, fetchSortedByTag } from './../../redux/actions/questionAction';
import { Rank } from '../../components';
import { URL_API } from '../../config';

class RankContainer extends Component {
  state = {
    // keyword: '',
    userInfo: [],
  };

  componentDidMount() {
    console.log('asdfasdfasdfasdf');
    axios// ${URL_API}
      .get(`${URL_API}/api/user/rank`)
      .then((res) => {
        console.log(res);
        this.setState({
          userInfo: res.data.users,
        });
      });
  }

  // userSearch = (event) => {
  //   if (event.key === 'Enter') {
  //     const { keyword } = this.state;
  //     const isExist = this.isTagExist(keyword);
  //     if (isExist) {
  //       this.props.history.push(`/sort/tag/${keyword}`);
  //     } else {
  //       alert('검색결과가 없습니다.');
  //     }
  //   }
  // }

  handleUserClick = (path) => {
    this.props.history.push(path);
  }

  // isTagExist = (keyword) => {
  //   const { tags } = this.props;
  //   const searchResult = tags.filter(item => item.tag.includes(keyword));

  //   return !!searchResult.length;
  // }

  // valueChange = (event) => {
  //   this.setState({
  //     keyword: event.target.value,
  //   });
  // }

  render() {
    // console.log(this.props);
    // console.log(tags, items);
    const { userInfo } = this.state;
    console.log(userInfo);
    return (
      <div>
        {userInfo.length
          ? <Rank
            // userSearch={this.userSearch}
            // valueChange={this.valueChange}
            handleUserClick={this.handleUserClick}
            userInfo={userInfo}
            />
          : <Loader active inline="centered" />
        }
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { tags } = state.questions;
  return { tags };
};

export default connect(mapStateToProps, { fetchQuestionTag, fetchSortedByTag })(RankContainer);
