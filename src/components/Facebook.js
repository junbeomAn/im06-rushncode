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
          appId="142599199929773"
          autoLoad
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }

    return <div>{fbContent}</div>;
  }
}

export default Facebook;
