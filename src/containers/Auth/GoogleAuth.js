import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';
import { Verify } from './../../redux/actions/verifyAction';


class Google extends Component {
  componentWillMount() {
    console.log(window.location.href.split('code=')[1].split('&scope')[0]);
    this.sendgoogleLoginReq(window.location.href.split('code=')[1].split('&scope')[0]);
  }

  sendgoogleLoginReq = (code) => {
    const googleUrl = `${process.env.API_PROD}/api/auth/google`;
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
          <Loader><h1>Verifying Google information...</h1></Loader>
        </Dimmer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.verify.isLoggedIn,
});

export default connect(mapStateToProps, { Verify })(Google);
