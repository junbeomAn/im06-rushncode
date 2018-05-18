import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Verify } from './../../redux/actions/verifyAction';

class Google extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.sendgoogleLoginReq = this.sendgoogleLoginReq.bind(this);
  }
  componentWillMount() {
    console.log(window.location.href.split('code=')[1].split('&scope')[0]);
    this.sendgoogleLoginReq(window.location.href.split('code=')[1].split('&scope')[0]);
  }

  sendgoogleLoginReq(code) {
    console.log(this); // 지워야함@@@@@@@@@@@@@@@@@@@@@@@@@@@

    const googleUrl = 'http://localhost:3001/api/auth/google';
    const data = {
      code,
    };

    axios
      .post(googleUrl, data)
      .then((res) => {
        if (res.data.message === 'login success') {
          localStorage.setItem('token', res.data.token);
          console.log('google login success');
          this.props.Verify();
          this.props.history.push('/');
        } else {
          alert(res.data.message);
          this.props.history.push('/auth');
        }
      })
      .catch(err => alert(err));
    // const getAccessTokenUrl = `https://graph.google.com/v3.0/oauth/access_token?client_id=235916540497077&redirect_uri=https://www.google.com/v3.0/dialog/oauth?client_id=235916540497077&redirect_uri=https://localhost:3000/auth/google&state=st=state123abc,ds=123456789&response_type=code&client_secret=9d32080a7858a054d18cf86dacb06957&code=${code}`;
      
    // console.log(getAccessTokenUrl);
    // console.log('where is my response!!!!!!!!!!');
    // axios
    //   .get(getAccessTokenUrl)
    //   .then((res) => {
    //     const getUserInfoUrl = `https://graph.google.com/me?fields=id,name,email&access_token=${res.data.access_token}`
    //     axios
    //       .get(getUserInfoUrl)
    //       .then(response => console.log(response.data.name));
    //   })
    //   .catch(err => alert(err));
  }

  render() {
    return (
      <div className="OAuthText">
        <h1>Verifying Google information...</h1>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  const { isLoggedIn } = state.verify;
  return { isLoggedIn };
};

export default connect(mapStateToProps, { Verify })(Google);
