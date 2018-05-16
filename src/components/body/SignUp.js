import React from 'react';
import { Divider, Button, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../../styles/css/Login.css';

const SignUp = ({ keyPress, signUp }) => (
  <div className="authContainer">
    <div className="authInputContainer border rounded">
      <div className="authButtonContainer">
        <Button color="facebook" className="authBtn">
          <Icon name="facebook" />Login with Facebook
        </Button>
        <Button color="google plus" className="authBtn">
          <Icon name="google" />Login with Google
        </Button>
      </div>
      <Divider horizontal>OR</Divider>
      <div className="authFormContainer">
        <div className="form-group">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text homeInputTitleTag" id="basic-addon1">
                Name
              </span>
            </div>
            <input
              type="text"
              className="form-control inputUname "
              aria-describedby="emailHelp"
              placeholder="User name"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text authInputTitleTag" id="basic-addon1">
                E-mail
              </span>
            </div>
            <input
              type="email"
              className="form-control inputEmail"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text authInputTitleTag" id="basic-addon1">
                Password
              </span>
            </div>
            <input
              type="password"
              className="form-control inputPwd"
              name="password"
              placeholder="Password"
              onKeyPress={(e) => {
                keyPress(e);
              }}
            />
          </div>
        </div>
        <button type="button" className="btn btn-secondary loginBtn">
              Sign In
        </button>
        <button
          onClick={() => {
            signUp();
          }}
          className="btn btn-primary authSubmitBtn"
        >
          Sign up
        </button>
      </div>
    </div>
  </div>
);


export default SignUp;
