import React, { Component } from 'react';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';
// import '../../styles/css/Login.css';
import SignUp from '../../components/body/SignUp';

import { URL_API } from '../../config';

class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      metaAddress: '',
    };
  }

  getMetaAddress = async () => {
    await this.setState({
      metaAddress: window.web3.eth.accounts[0],
    });
  }

  signUp = () => {
    const userInfo = {};
    userInfo.username = document.getElementsByClassName('inputUname')[0].value;
    userInfo.email = document.getElementsByClassName('inputEmail')[0].value;
    userInfo.password = document.getElementsByClassName('inputPwd')[0].value;
    userInfo.metaAddress = this.state.metaAddress;

    const signUpUrl = `${URL_API}/api/auth/signup`;
    axios
      .post(signUpUrl, userInfo)
      .then((res) => {
        if (res.data.message === 'complete signup') {
          console.log(res);
          alert('Now CHECK your EMAIL to verify.');
          this.props.history.push('/');
        } else {
          alert(res.data.message);
          this.props.history.push('/auth/signup');
        }
      })
      .catch(err => console.log(err));
  };

  keyPress = (e) => {
    if (e.key === 'Enter') {
      this.signUp();
    }
  };

  render() {
    return (
      <SignUp signUp={this.signUp} getMetaAddress={this.getMetaAddress} metaAddress={this.state.metaAddress} keyPress={this.keyPress} />
    );
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
