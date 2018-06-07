import React, { Component } from 'react';
import { Loader } from 'semantic-ui-react';
import axios from 'axios';
import { connect } from 'react-redux';

import { Verify } from '../../redux/actions/verifyAction';
import { Rank } from '../../components';
import { URL_API } from '../../config';

class RankContainer extends Component {
  state = {
    keyword: '',
    userInfo: [],
  };

  componentDidMount() {
    axios.get(`${URL_API}/api/user/rank`).then((res) => {
      console.log(res);
      this.setUserData(res.data.users);
    });
  }

  setUserData = (users) => {
    this.setState({
      userInfo: users,
    });
  };

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
  };

  handleUserClick = (path) => {
    if (!this.props.isLoggedIn) {
      return alert('로그인이 필요한 서비스입니다.');
    }
    this.props.history.push(path);
  };

  isUserExist = (keyword) => {
    const { userInfo } = this.state;
    const searchResult = userInfo.filter(item => item.username === keyword);

    return searchResult.length ? searchResult[0].id : false;
  };

  valueChange = (event) => {
    this.setState({
      keyword: event.target.value,
    });
  };

  render() {
    // console.log(this.props);
    // console.log(tags, items);
    const { userInfo } = this.state;
    console.log(userInfo);
    return (
      <div>
        {userInfo.length ? (
          <Rank
            userSearch={this.userSearch}
            valueChange={this.valueChange}
            handleUserClick={this.handleUserClick}
            userInfo={userInfo}
          />
        ) : (
          <Loader active inline="centered" />
        )}
      </div>
    );
  }
}

// export default RankContainer;
// 원하는이름 : state.(Reducer/index.js 정의한 이름).(initialState 해당 이름)
const mapStateToProps = state => ({
  isLoggedIn: state.verify.isLoggedIn,
});

// export default 커넥트(mapStateToProps, { action에 정의된 함수 })(해당 컴포넌트)
export default connect(mapStateToProps, { Verify })(RankContainer);
