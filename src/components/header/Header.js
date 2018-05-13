import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/css/Header.css';
import Verify from './../body/Verify';
import Logout from './../body/Logout';

class Headers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verified: false,
    };
  }
  // componentDidMount() {
  //   this.setVerification(Verify());
  // }

  setVerification(promise) {
    promise.then((res) => {
      if (res !== this.state.verified) {
        this.setState({ verified: res });
      }
      console.log(res);
    });
  }

  render() {
    this.setVerification(Verify());
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark Header">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <span className="navbar-brand title">
            <NavLink exact to="/">
              <h1>러시앤코드</h1>
            </NavLink>
          </span>
          <div className="collapse navbar-collapse itembox" id="navbarSupportedContent">
            <ul className="nav navbar-nav navbar-right">
              <li className="nav-item">
                <NavLink to="/forum" className="item">
                  포럼
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/question" className="item">
                  질문
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/tag" className="item">
                  태그
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/rank" className="item">
                  랭크
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/job" className="item">
                  채용정보
                </NavLink>
              </li>
              {!this.state.verified ? (
                <li className="nav-item">
                  <NavLink to="/auth" className="item">
                    로그인
                  </NavLink>
                </li>
              ) : (
                <li className="nav-item">
                  <NavLink to="/" onClick={Logout} className="item">
                    로그아웃
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
// const Headers = () => (

//   <nav className="navbar navbar-expand-lg navbar-light bg-dark Header">
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <span className="navbar-brand title">
//         <NavLink exact to="/">
//           <h1>러시앤코드</h1>
//         </NavLink>
//       </span>
//       <div className="collapse navbar-collapse itembox" id="navbarSupportedContent">
//         <ul className="nav navbar-nav navbar-right">
//           <li className="nav-item">
//             <NavLink to="/forum" className="item">
//               포럼
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink to="/question" className="item">
//               질문
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink to="/tag" className="item">
//               태그
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink to="/rank" className="item">
//               랭크
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink to="/job" className="item">
//               채용정보
//             </NavLink>
//           </li>
//           {console.log(getSuccess(Verify())) ? (
//             <li className="nav-item">
//               <NavLink to="/auth" className="item">
//                 로그인
//               </NavLink>
//             </li>
//           ) : (
//             <li className="nav-item">
//               <NavLink to="/" onClick={Logout} className="item">
//                 로그아웃
//               </NavLink>
//             </li>
//           )}
//         </ul>
//       </div>
//     </div>
//   </nav>
// );

export default Headers;
