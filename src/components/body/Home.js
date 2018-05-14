import React from 'react';
import { NavLink } from 'react-router-dom';
// import 'semantic-ui-css/semantic.min.css';
import '../../styles/css/Home.css';

const arr = [1, 2, 3, 4, 5, 6];

const Home = () => (
  <div className="homeContainer">
    <div className="homeUpper">
      <div className="jumbotron HomeJumbotron">
        <h1>Hello Fuckers</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention
          to featured content or information.
        </p>
        <span className="homeLBtn">
          <NavLink to="/question" className="item">
            <button type="button" className="btn btn-outline-light btn-lg">
              질문하기
            </button>
          </NavLink>
        </span>
        <span className="homeRBtn">
          <NavLink to="/signup" className="item">
            <button type="button" className="btn btn-outline-light btn-lg">
              회원가입
            </button>
          </NavLink>
        </span>
      </div>
    </div>
    <div className="homeLower">
      <div className="homeQHeader">questions header</div>
      <div className="homeLowerLeft">
        {arr.map((item, index) => (
          <div key={index}>
            <div className="homePost">
              <span className="homePostTitle">
                <a href="/">{item}</a>
              </span>
            </div>
            <hr align="center" className="homeHr" />
          </div>
        ))}
      </div>
      <div className="homeLowerRight">
        <div className="homeLowerRightContent">aaa</div>
        <div className="homeLowerRightContent">aaa</div>
      </div>
    </div>
  </div>
);

export default Home;
