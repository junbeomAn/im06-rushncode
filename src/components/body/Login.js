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

const Login = ({ keyPress, login, fbLogin }) => (
  <div className="authContainer">
    <div className="authInputContainer border rounded">
      <div className="authButtonContainer">
      
        <a href={`https://www.facebook.com/v3.0/dialog/oauth?client_id=235916540497077&redirect_uri=https://localhost:3000/auth/facebook&state=st=state123abc,ds=123456789&response_type=code`}>
          <Button color="facebook" className="authBtn">
            <Icon name="facebook" />Login with Facebook
          </Button>
        </a>
        <a href={`https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&access_type=offline&include_granted_scopes=true&state=state_parameter_passthrough_value&redirect_uri=http://localhost:3000/auth/google&response_type=code&client_id=1057319403388-ng0dluqb41b5kk4gt37bot92piirjiu6.apps.googleusercontent.com`}>
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
          로그인
        </button>
      </div>
    </div>
    <div className="border rounded authOptionContainer">
      <p>
        Did you forget your password? <a href="#">Find</a>
      </p>
      <p>
        Don't you have account? <a href="/signup">Signup</a>
      </p>
    </div>
  </div>
);

export default Login;

// <div className="authContainer">
//   <div className="authInputContainer">
//     <Segment>
//       <div className="authButtonContainer">
//         <Button fluid color="google plus" className="authConnectLogin">
//           <Icon name="google plus" /> Google Plus
//         </Button>
//       </div>
//       <div className="authButtonContainer">
//         <Button fluid color="facebook" className="authConnectLogin">
//           <Icon name="facebook" /> Facebook
//         </Button>
//       </div>
//       <Divider horizontal className="authDivider">
//         OR
//       </Divider>
//       <div className="authFormContainer">
//         <Form action="http://localhost:3001/auth/signin" method="post">
//           <Form.Field>
//             <Input icon="at" name="email" placeholder="E-mail address" size="medium" />
//           </Form.Field>
//           <Form.Field>
//             <Input
//               icon="lock"
//               name="password"
//               type="password"
//               placeholder="password"
//               size="medium"
//             />
//           </Form.Field>
//           <Button type="submit">Sign In dude</Button>
//         </Form>
//       </div>
//     </Segment>
//     <Segment textAlign="center">
//       <p>
//         Did you forget your password? <a href="/">Find</a>
//       </p>
//       <p>
//         Don't you have an account? <a href="/">Sign Up</a>
//       </p>
//     </Segment>
//   </div>
// </div>

// @@@@@@@@@@@@@@@@ Button in bootstrap. if semantic ui doesn't fit.
// {/* <button type="button" className="btn btn-facebook authBtn">
//           login with Facebook account
//         </button>
//         <button type="button" className="btn btn-google authBtn">
//           login with Google account
//         </button>  */}
