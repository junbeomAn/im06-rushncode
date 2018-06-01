import React from 'react';
import { Divider, Button, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import { URL } from '../../config';


const LoginAdd = ({ keyPress, login }) => (
  <div className="authContainer">
    <div className="loginAddText">
      You already logged in.<br />
      <br /> If you need to use another account, use following services.
    </div>
    <div className="authAddInputContainer border rounded">
      <div className="authButtonContainer">
        <a
          href={`https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&access_type=offline&include_granted_scopes=true&state=state_parameter_passthrough_value&redirect_uri=${URL}/auth/google&response_type=code&client_id=1057319403388-ng0dluqb41b5kk4gt37bot92piirjiu6.apps.googleusercontent.com`}
        >
          <Button color="google plus" className="authBtn">
            <Icon name="google" />Login with Google
          </Button>
        </a>
        <a href="https://github.com/login/oauth/authorize?client_id=9eccd23df65b6d3581f9">
          <Button color="black" className="authBtn">
            <Icon name="github" />Login with Github
          </Button>
        </a>
      </div>
      <Divider horizontal>OR</Divider>
      <div className="authFormContainer">
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
                password
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
        <button
          onClick={() => {
            login();
          }}
          className="btn btn-primary authSubmitBtn"
        >
          Add Login
        </button>
      </div>
    </div>
  </div>
);

export default LoginAdd;
