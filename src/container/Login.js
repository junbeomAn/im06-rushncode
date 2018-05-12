import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './../styles/css/Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="homeInputContainer">
        <div className="buttonContainer">
          <div className="btn-group loginBtn" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-facebook loginBtn">
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
          <form action="http://localhost:3001/api/auth/signup" method="post">
            <div className="form-group">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text homeInputTitleTag" id="basic-addon1">
                    User name
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="exampleInputEmail1"
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
                  className="form-control"
                  name="email"
                  id="exampleInputEmail1"
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
                  className="form-control"
                  name="password"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
            </div>
            <button type="button" className="btn btn-outline-light btn-lg signUpBtn">
              Sign up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
