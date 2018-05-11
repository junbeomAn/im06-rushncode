import React from 'react';
import { Button, Divider, Icon } from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css';
import '../../styles/css/Home.css';
import Login from './../../container/Login';

const arr = [1, 2, 3, 4, 5, 6];

const Home = () => (
  <div className="container">
    <div className="upper">
      <div className="upper-content">
        <h1>HELLO FUCKERS</h1>
        <p>
          At Palantir, we work for the common good—within our organization and with other
          organizations around the world. We’re building a future where data can be leveraged to
          serve people, create value, and improve quality of life.
        </p>
      </div>
      <Login />
    </div>
    <div className="lower">
      <div className="qHeader">questions header</div>
      <div className="lowerLeft">
        {arr.map(item => (
          <div>
            <div className="post">
              <span className="postTitle">
                <a href="/">{item}</a>
              </span>
            </div>
            <hr align="center" />
          </div>
        ))}
      </div>
      <div className="lowerRight">
        <div className="lowerRightContent">aaa</div>
        <div className="lowerRightContent">aaa</div>
        <div className="lowerRightContent">aaa</div>
        <div className="lowerRightContent">aaa</div>
        <div className="lowerRightContent">aaa</div>
      </div>
    </div>
  </div>
);

export default Home;
