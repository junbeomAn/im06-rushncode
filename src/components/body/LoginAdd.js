import React from 'react';
import { Divider, Button, Icon } from 'semantic-ui-react';
// import { Route, Redirect } from 'react-router';
// import 'react-flexview/lib/flexView.css';
// import FlexView from 'react-flexview';
import 'semantic-ui-css/semantic.min.css';
import './../../styles/css/Auth.css';
import Facebook from './../Facebook';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

const LoginAdd = ({ keyPress, login, fbLogin }) => (
  <div className="authContainer">
    <div className="loginAddText">You already logged in.<br /><br /> If you need to use another account, use following services.</div>
    <div className="authAddInputContainer border rounded">
      <div className="authButtonContainer">
        {/* <Button color="facebook" onClick={fbLogin} className="authBtn">
          <Icon name="facebook" />Login with Facebook
        </Button> */}
        <Facebook />
        <Button color="google plus" onClick={() => {console.log(window.confirm('hello?'))}} className="authBtn">
          <Icon name="google" />Login with Google
        </Button>
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

