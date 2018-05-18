import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export class Facebook extends Component {
  state = {
    isLoggedin: false,
    userId: '',
    name: '',
    email: '',
    picture: '',
  };

  responseFacebook = (response) => {
    console.log(response);
    const {
      userId, name, email, picture,
    } = response;

    this.setState({
      isLoggedin: true,
      userId,
      name,
      email,
      picture: picture.data.url,
    });
  };

  componentClicked = () => console.log('clicked');

  render() {
    let fbContent;
    if (this.state.isLoggedin) {
      fbContent = (
        <div
          style={{
            width: '400px',
            margin: 'auto',
            background: '#f4f4f4',
            padding: '20px',
          }}
        >
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
          Email : {this.state.email}
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="235916540497077"
          autoLoad
          fields="name,email,picture"
          scope="public_profile,user_friends"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }
//https://www.facebook.com/v3.0/dialog/oauth?client_id=235916540497077&redirect_uri=https://localhost:3000/&state="{st=state123abc,ds=123456789}"&response_type=code
//끝에오는 코드 잘라서 보낸다
//9d32080a7858a054d18cf86dacb06957
    return <div>{fbContent}</div>;
  }
}

export default Facebook;
