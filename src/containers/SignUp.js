import React, { Component } from 'react';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';
import './../styles/css/Login.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.signUp = this.signUp.bind(this);
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

  render() {
    return (
      <div className="homeInputContainer">
        <div className="buttonContainer">
          <div className="btn-group loginBtn" role="group" aria-label="Basic example">
            <button type="button" onClick={this.verify} className="btn btn-facebook loginBtn">
              Facebook
            </button>
            <button type="button" className="btn btn-google loginBtn">
              Google
            </button>
            <button type="button" className="btn btn-secondary loginBtn">
              Sign In
            </button>
          </div>
        </div>
        <div className="authFormContainer">
          <form onSubmit={this.signUp}>
            <div className="form-group">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text homeInputTitleTag" id="basic-addon1">
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
                  <span className="input-group-text homeInputTitleTag" id="basic-addon1">
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
                  <span className="input-group-text homeInputTitleTag" id="basic-addon1">
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
            <button
              onClick={this.signUp}
              // className="btn btn-outline-light btn-lg signUpBtn"
            >
            Sign up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
