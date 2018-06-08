import React from 'react';
import { Divider, Button, Icon, Popup } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import { URL } from '../../config';
import { isChrome } from '../../browsercheck';

const SignUp = ({ keyPress, signUp, getMetaAddress, metaAddress }) => (
  <div className="authContainer">
    <div className="auth-title">
      <h1>러시앤코드 계정 만들기</h1>
    </div>
    <div className="authInputContainer border rounded">
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
      <Divider horizontal>또는</Divider>
      {isChrome &&
      <Popup
        trigger={
          <button type="button" onClick={getMetaAddress} style={{ fontWeight: 'bolder' }} className="btn btn-info authBtn">
            메타마스크 주소 가져오기
          </button>
        }
        on="click"
        position="right center"
        style={{ opacity: '0.9' }}
        wide
      >
        {metaAddress || '메타마스크에 연결중입니다. 다시 한번 시도하시거나, 메타마스크 로그인을 확인해주세요.'}&nbsp;&nbsp;{metaAddress && <Icon style={{ display: 'inline' }} name="checkmark" color="green" />}
      </Popup>}
      <div className="authFormContainer">
        <div className="form-group">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text authInputTitleTag" id="basic-addon1">
                이름
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
                이메일
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
                비밀번호
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
        <div className="authButtonContainer">
          <button
            onClick={() => {
              signUp();
            }}
            className="btn btn-primary authBtn"
          >
            계정생성
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default SignUp;
