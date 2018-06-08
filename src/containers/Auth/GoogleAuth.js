import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Dimmer, Loader } from 'semantic-ui-react';

import { Verify } from './../../redux/actions/verifyAction';
import { isMobile } from '../../browsercheck';

import { URL_API } from '../../config';

class Google extends Component {
  componentWillMount() {
    console.log(window.location.href.split('code=')[1].split('&scope')[0]);
    this.sendgoogleLoginReq(window.location.href.split('code=')[1].split('&scope')[0]);
  }

  sendgoogleLoginReq = (code) => {
    const googleUrl = `${URL_API}/api/auth/google`;
    const metaAddress = window.web3 ? window.web3.eth.accounts[0] : '';

    const data = {
      code,
      metaAddress,
    };

    axios
      .post(googleUrl, data)
      .then((res) => {
        if (res.data.message === 'login success') {
          localStorage.setItem('token', res.data.token);
          console.log('google login success');
          this.props.Verify();
          if (!window.web3 && isMobile) {
            this.props.history.push('/');
            return;
          }
          if (
            !alert(window.web3.eth.accounts[0]
              ? `메타마스크 지갑주소 ${window.web3.eth.accounts[0]}를 사용합니다`
              : '메타마스크 로그인이 필요합니다.')
          ) {
            this.props.history.push('/');
          }
        } else {
          alert(res.data.message);
          this.props.history.push('/auth/signin');
        }
      })
      .catch((err) => {
        throw err;
      });
  };

  render() {
    return (
      <div className="OAuthText">
        <Dimmer active>
          <Loader>
            <h1>Verifying Google information...</h1>
          </Loader>
        </Dimmer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.verify.isLoggedIn,
});

export default connect(mapStateToProps, { Verify })(Google);
