import React, { Component } from 'react';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';
// import '../../styles/css/Login.css';
import SignUp from '../../components/body/SignUp';

class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.signUp = this.signUp.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  signUp() {
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
        this.props.history.push('/auth');
      })
      .catch(err => console.log(err));
  }

  keyPress(e) {
    if (e.key === 'Enter') {
      this.signUp();
    }
  }

  render() {
    return <SignUp signUp={this.signUp} keyPress={this.keyPress} />;
  }
}

export default SignUpContainer;
// <div className="homeInputContainer">
//   <div className="buttonContainer">
//     <div className="btn-group loginBtn" role="group" aria-label="Basic example">
//       <button type="button" onClick={this.verify} className="btn btn-facebook loginBtn">
//         Facebook
//       </button>
//       <button type="button" className="btn btn-google loginBtn">
//         Google
//       </button>
//       <button type="button" className="btn btn-secondary loginBtn">
//         Sign In
//       </button>
//     </div>
//   </div>
//   <div className="authFormContainer">
//     <div className="form-group">
//       <div className="input-group mb-3">
//         <div className="input-group-prepend">
//           <span className="input-group-text homeInputTitleTag" id="basic-addon1">
//             User name
//           </span>
//         </div>
//         <input
//           type="text"
//           className="form-control inputUname col-md-4"
//           aria-describedby="emailHelp"
//           placeholder="User name"
//         />
//       </div>
//     </div>
//     <div className="form-group">
//       <div className="input-group mb-3">
//         <div className="input-group-prepend">
//           <span className="input-group-text homeInputTitleTag" id="basic-addon1">
//             E-mail
//           </span>
//         </div>
//         <input
//           type="email"
//           className="form-control inputEmail col-md-4"
//           aria-describedby="emailHelp"
//           placeholder="Enter email"
//         />
//       </div>
//     </div>
//     <div className="form-group">
//       <div className="input-group mb-3">
//         <div className="input-group-prepend">
//           <span className="input-group-text homeInputTitleTag" id="basic-addon1">
//             Password
//           </span>
//         </div>
//         <input
//           type="password"
//           className="form-control inputPwd col-md-4"
//           id="exampleInputPassword1"
//           placeholder="Password"
//         />
//       </div>
//     </div>
//     <button
//       onClick={() => { this.signUp(this.props.history); }}
//       // className="btn btn-outline-light btn-lg signUpBtn"
//     >
//     Sign up
//     </button>
//   </div>
// </div>
