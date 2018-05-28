import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import { Verify } from './../../redux/actions/verifyAction';
import Login from '../../components/body/Login';
import LoginAdd from '../../components/body/LoginAdd';


class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.login = this.login.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  login() {
    const userInfo = {};
    userInfo.email = document.getElementsByClassName('inputEmail')[0].value;
    userInfo.password = document.getElementsByClassName('inputPwd')[0].value;
    const signInUrl = `${process.env.API_PROD}/api/auth/signin`;
    console.log(process.env.API_PROD);
    axios
      .post(signInUrl, userInfo)
      .then((res) => {
        console.log(res);
        if (res.data.message === 'login success') {
          localStorage.setItem('token', res.data.token);
          this.props.Verify();
          this.props.history.push('/');
        } else {
          // email not exist, incorrect password, check your email
          alert(res.data.message);
          // console.log(res);
          this.props.history.push('/auth/signin');
        }        
      })
      .catch(err => alert(err));
  }

  keyPress(e) {
    if (e.key === 'Enter') {
      this.login();
    }
  }

  render() {
    return (
      <div>
        {this.props.isLoggedIn ? (
          <LoginAdd login={this.login} keyPress={this.keyPress} />
        ) : (
          <Login login={this.login} keyPress={this.keyPress} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { isLoggedIn } = state.verify;
  return { isLoggedIn };
};

export default connect(mapStateToProps, { Verify })(LoginContainer);

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
