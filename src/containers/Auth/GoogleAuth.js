import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Verify } from './../../redux/actions/verifyAction';

class Google extends Component {
  componentWillMount() {
    console.log(window.location.href.split('code=')[1].split('&scope')[0]);
    this.sendgoogleLoginReq(window.location.href.split('code=')[1].split('&scope')[0]);
  }

  sendgoogleLoginReq = (code) => {
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
      .catch((err) => {
        throw err;
      });
  };

  render() {
    return (
      <div className="OAuthText">
        <h1>Verifying Google information...</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.verify.isLoggedIn,
});

export default connect(mapStateToProps, { Verify })(Google);
