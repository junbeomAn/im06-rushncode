import React, { Component } from 'react';
import { Loader } from 'semantic-ui-react';
import axios from 'axios';
import { Rank } from '../../components';
import { URL_API } from '../../config';

class RankContainer extends Component {
  state = {
    keyword: '',
    userInfo: [],
  };

  componentDidMount() {
    axios
      .get(`${URL_API}/api/user/rank`)
      .then((res) => {
        console.log(res);
        setTimeout(() => { this.setUserData(res.data.users); }, 1000);
      });
  }

  setUserData = (users) => {
    this.setState({
      userInfo: users,
    });
  }

  userSearch = (event) => {
    if (event.key === 'Enter') {
      const { keyword } = this.state;
      const isExistOrID = this.isUserExist(keyword);
      if (isExistOrID) {
        this.props.history.push(`/mypage/${isExistOrID}`);
      } else {
        alert('검색결과가 없습니다.');
      }
    }
  }

  handleUserClick = (path) => {
    this.props.history.push(path);
  }

  isUserExist = (keyword) => {
    const { userInfo } = this.state;
    const searchResult = userInfo.filter(item => item.username === keyword);

    return searchResult.length ? searchResult[0].id : false;
  }

  valueChange = (event) => {
    this.setState({
      keyword: event.target.value,
    });
  }

  render() {
    // console.log(this.props);
    // console.log(tags, items);
    const { userInfo } = this.state;
    console.log(userInfo);
    return (
      <div>
        {userInfo.length
          ? <Rank
            userSearch={this.userSearch}
            valueChange={this.valueChange}
            handleUserClick={this.handleUserClick}
            userInfo={userInfo}
          />
          : <Loader active inline="centered" />
        }
      </div>
    );
  }
}

export default RankContainer;
