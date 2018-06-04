import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Dimmer, Loader } from 'semantic-ui-react';
import { Verify } from './../../redux/actions/verifyAction';

import { URL_API } from '../../config';

class Github extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.sendGithubLoginReq = this.sendGithubLoginReq.bind(this);
  }
  componentWillMount() {
    this.sendGithubLoginReq(window.location.href.split('=')[1]);
  }

  sendGithubLoginReq(code) {
    const githubUrl = `${URL_API}/api/auth/github`;
    const metaAddress = window.web3.eth.accounts[0];

    const data = {
      code,
      metaAddress,
    };

    axios
      .post(githubUrl, data)
      .then((res) => {
        if (res.data.message === 'login success') {
          localStorage.setItem('token', res.data.token);
          this.props.Verify();
          if (!alert(`메타마스크 지갑주소 ${window.web3.eth.accounts[0]}를 사용합니다`)) {
            this.props.history.push('/');
          }
        } else {
          alert(res.data.message);
          this.props.history.push('/auth/signin');
        }
      })
      .catch(err => alert(err));
  }

  render() {
    return (
      <div className="OAuthText">
        <Dimmer active>
          <Loader>
            <h1>Verifying github information...</h1>
          </Loader>
        </Dimmer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { isLoggedIn } = state.verify;
  return { isLoggedIn };
};

export default connect(mapStateToProps, { Verify })(Github);
