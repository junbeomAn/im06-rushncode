import React, { Component } from 'react';
import HomeShowcase from '../../components/showcases/HomeShowcase';

export class Home extends Component {
  state = {};
  render() {
    return (
      <div className="homeContainer">
        <HomeShowcase />
        <div className="home-lower-box">
          <div className="home-lower">
            <div className="home-lower-left">
              <div className="home-lower-left-header">
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      최신
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      인기
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      금액
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/tag">
                      태그
                    </a>
                  </li>
                </ul>
              </div>
              <div className="home-lower-left-main">left-main</div>
            </div>
            <div className="home-lower-right">
              <div className="home-lower-right-main">right-main</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
