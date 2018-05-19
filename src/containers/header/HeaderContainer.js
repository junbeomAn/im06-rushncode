import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import Logout from './../../components/body/Logout';
import { Verify, SignOut } from './../../redux/actions/verifyAction';

class Headers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.Verify();
  }

  render() {
    // this.props.Verify();
    return (
      <nav className="navbar navbar-expand-lg navbar-light Header">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <span className="navbar-brand title">
            <NavLink exact to="/">
              <h1>러시앤코드</h1>
            </NavLink>
          </span>
          <div className="collapse navbar-collapse headerItembox" id="navbarSupportedContent">
            <ul className="nav navbar-nav navbar-right">
              <li className="nav-item">
                <NavLink to="/question" className="item">
                  질문
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/tag" className="item">
                  태그
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/rank" className="item">
                  랭크
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/job" className="item">
                  채용정보
                </NavLink>
              </li>
              {!this.props.isLoggedIn ? (
                <li className="nav-item">
                  <NavLink to="/auth/signin" className="item">
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
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}


const mapStateToProps = (state) => {
  const { isLoggedIn } = state.verify;
  return { isLoggedIn };
};

export default connect(mapStateToProps, { Verify, SignOut })(Headers);
