import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import Logout from './../../components/body/Logout';
import { Verify, SignOut } from './../../redux/actions/verifyAction';
import { getSearchResult } from './../../redux/actions/questionAction';

class Headers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWord: '',
    };
  }

  componentDidMount() {
    this.props.Verify();
  }

  changeValue = (e) => {
    this.setState({
      searchWord: e.target.value,
    });
  };

  render() {
    // this.props.Verify();
    return (
      <nav className="navbar navbar-expand-lg fixed-top navbar-light Header">
        <div className="collapse navbar-collapse header-container" id="navbarSupportedContent">
          <div className="navbar-brand header-title">
            <NavLink exact to="/">
              <span className="navbar-brand mb-0 h1 header-brand">러시앤코드</span>
            </NavLink>
          </div>
          <div className="collapse navbar-collapse header-tabs" id="navbarSupportedContent">
            <ul className="nav navbar-nav navbar-center">
              <li className="nav-item">
                <NavLink to="/question" className="item question-tab">
                  질문
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/tag" className="item tag-tab">
                  태그
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/rank" className="item rank-tab">
                  랭킹
                </NavLink>
              </li>
              {this.props.isLoggedIn && (
                <li className="nav-item">
                  <NavLink to={`/mypage/${this.props.userID}`} className="item mypage-tab">
                    프로필
                  </NavLink>
                </li>
              )}
              {!this.props.isLoggedIn ? (
                <li className="nav-item">
                  <NavLink to="/auth/signin" className="item auth-tab">
                    로그인
                  </NavLink>
                </li>
              ) : (
                <li className="nav-item">
                  <NavLink to="/auth/signin" onClick={this.props.SignOut} className="item">
                    로그아웃
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
          <div className="header-search">
            <input
              className="form-control mr-sm-2 search-input"
              type="search"
              placeholder="검색어를 입력하세요"
              aria-label="Search"
              onChange={this.changeValue}
            />
            <NavLink to={`/loading/search?q=${this.state.searchWord}`}>
              <button className="btn btn-outline-dark my-2 my-sm-0 search-btn">검색</button>
            </NavLink>
          </div>
          <div className="header-search-invisible" />
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  const { isLoggedIn, userID, email } = state.verify;
  return { isLoggedIn, userID, email };
};

export default connect(mapStateToProps, { Verify, SignOut, getSearchResult })(Headers);
