import React, { Component } from 'react';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';
import './../styles/css/Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.logout = this.logout.bind(this);
    this.signUp = this.signUp.bind(this);
    this.verify = this.verify.bind(this);
  }

  logout() {
    console.log(this);
    const token = localStorage.getItem('token');
    if (token) {
      localStorage.removeItem('token');
    }
    console.log('redirect logged out home');
  }

  signUp(e) {
    console.log(this);
    const userInfo = {};
    userInfo.username = document.getElementsByClassName('inputUname')[0].value;
    userInfo.email = document.getElementsByClassName('inputEmail')[0].value;
    userInfo.password = document.getElementsByClassName('inputPwd')[0].value;
    const signUpUrl = 'http://localhost:3001/api/auth/signup';
    axios
      .post(signUpUrl, userInfo)
      .then((res) => {
        console.log(res);
        console.log('redirect log-in');
      })
      .catch(err => console.log(err));
    e.preventDefault();
  }

  async verify(e) {
    console.log(this);
    let verified = false;
    // verify function./....
    const verifyUrl = 'http://localhost:3001/api/auth/verify';
    const token = localStorage.getItem('token');
    const config = {
      headers: { 'x-access-token': token },
    };

    await axios
      .get(verifyUrl, config)
      .then((res) => {
        if (res.data.success) {
          console.log(res.data.success);
          verified = res.data.success;
        } else { // no token
          console.log('alert to suggest login, redirect to login');
        }
      })
      .catch(err => console.log(err));
    return verified;
  }

  render() {
    return (
      <div className="loginInputContainer">
        <div className="loginBtnContainer">
          <div className="btn-group loginSignInBtn" role="group" aria-label="Basic example">
            <button type="button" onClick={this.verify} className="btn btn-facebook loginSignInBtn">
              Facebook
            </button>
            <button type="button" className="btn btn-google loginSignInBtn">
              Google
            </button>
            <button type="button" className="btn btn-secondary loginSignInBtn">
              Sign In
            </button>
          </div>
        </div>
        <div className="authFormContainer">
          <form onSubmit={this.login}>
            <div className="form-group">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text loginInputTitleTag" id="basic-addon1">
                    User name
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control inputUname"
                  aria-describedby="emailHelp"
                  placeholder="User name"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text loginInputTitleTag" id="basic-addon1">
                    E-mail
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control inputEmail"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text loginInputTitleTag" id="basic-addon1">
                    Password
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control inputPwd"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
            </div>
            <input
              type="submit"
              value="Sign up"
              className="btn btn-outline-light btn-lg signUpBtn"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
