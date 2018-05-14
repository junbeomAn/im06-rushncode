import React from 'react';
import axios from 'axios';
import { Divider, Button, Icon } from 'semantic-ui-react';
// import { Route, Redirect } from 'react-router';
// import 'react-flexview/lib/flexView.css';
// import FlexView from 'react-flexview';
import 'semantic-ui-css/semantic.min.css';
import '../../styles/css/Auth.css';

const login = (history) => {  
  const userInfo = {};
  userInfo.email = document.getElementsByClassName('inputEmail')[0].value;
  userInfo.password = document.getElementsByClassName('inputPwd')[0].value;
  const signInUrl = 'http://localhost:3001/api/auth/signin';

  axios
    .post(signInUrl, userInfo)
    .then((res) => {     
      localStorage.setItem('token', res.data.token);
      history.push('/');
    })
    .catch(err => alert(err));  
};

const Auth = ({ history }) => (
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
            />
          </div>
        </div>
        <button onClick={() => {login(history); }} className="btn btn-primary authSubmitBtn" >
          로그인
        </button>        
      </div>
    </div>
    <div className="border rounded authOptionContainer">
      <p>
        Did you for get your password? <a href="#">Find</a>
      </p>
      <p>
        Don't you have account? Signup <a href="#">Signup</a>
      </p>
    </div>
  </div>
);

export default Auth;

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
