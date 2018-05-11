import React from 'react';
import { Divider, Button, Icon } from 'semantic-ui-react';
// import 'react-flexview/lib/flexView.css';
// import FlexView from 'react-flexview';
import 'semantic-ui-css/semantic.min.css';
import '../../styles/css/Auth.css';

require('bootstrap-social');
// import '../../../bower_components/bootstrap-social/bootstrap-social.css';

const Auth = () => (
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
        <form action="http://localhost:3001/api/auth/signin" method="post">
          <div className="form-group">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text authInputTitleTag" id="basic-addon1">
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
                <span className="input-group-text authInputTitleTag" id="basic-addon1">
                  password
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
          <button type="submit" className="btn btn-primary authSubmitBtn">
            login
          </button>
        </form>
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
//         <Button fluid color="google plus" className="connectLogin">
//           <Icon name="google plus" /> Google Plus
//         </Button>
//       </div>
//       <div className="authButtonContainer">
//         <Button fluid color="facebook" className="connectLogin">
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
