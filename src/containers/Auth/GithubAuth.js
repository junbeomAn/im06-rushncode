import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Verify } from './../../redux/actions/verifyAction';


class Github extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.sendGithubLoginReq = this.sendGithubLoginReq.bind(this);
  }
  componentWillMount() {
    this.sendGithubLoginReq(window.location.href.split('=')[1])
  }

  sendGithubLoginReq(code) {
    console.log(this); // 지워야함@@@@@@@@@@@@@@@@@@@@@@@@@@@
    const data = {
      code,
    };
    
    const githubUrl = 'http://localhost:3001/api/auth/github';
    axios
      .post(githubUrl, data)
      .then((res) => {
        if (res.data.message === 'login success') {
          localStorage.setItem('token', res.data.token);
          this.props.Verify();
          this.props.history.push('/');
        } else {
          alert(res.data.message);
          this.props.history.push('/auth');
        }
      })
      .catch(err => alert(err));
  }

  render() {
    return (
      <div className="OAuthText">
        <h1>Verifying github information...</h1>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  const { isLoggedIn } = state.verify;
  return { isLoggedIn };
};

export default connect(mapStateToProps, { Verify })(Github);
