import React from 'react';
// import { NavLink } from 'react-router-dom';
// import 'semantic-ui-css/semantic.min.css';
import '../../styles/css/Home.css';
import HomeShowcase from '../showcases/HomeShowcase';

const arr = [1, 2, 3, 4, 5, 6];

const Home = () => (
  <div className="homeContainer">
    <HomeShowcase />
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
