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
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a
                      className="nav-item nav-link active"
                      id="nav-default-tab"
                      data-toggle="tab"
                      href="#nav-default"
                      role="tab"
                      aria-controls="nav-default"
                      aria-selected="true"
                    >
                      최신
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="nav-like-tab"
                      data-toggle="tab"
                      href="#nav-like"
                      role="tab"
                      aria-controls="nav-like"
                      aria-selected="false"
                    >
                      인기
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="nav-reward-tab"
                      data-toggle="tab"
                      href="#nav-reward"
                      role="tab"
                      aria-controls="nav-reward"
                      aria-selected="false"
                    >
                      금액
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="nav-tag-tab"
                      data-toggle="tab"
                      href="#nav-tag"
                      role="tab"
                      aria-controls="nav-tag"
                      aria-selected="false"
                    >
                      태그
                    </a>
                  </div>
                </nav>
              </div>
              <div className="home-lower-left-main">
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-default"
                    role="tabpanel"
                    aria-labelledby="nav-default-tab"
                  >
                    최신
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-like"
                    role="tabpanel"
                    aria-labelledby="nav-like-tab"
                  >
                    인기
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-reward"
                    role="tabpanel"
                    aria-labelledby="nav-reward-tab"
                  >
                    금액
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-tag"
                    role="tabpanel"
                    aria-labelledby="nav-tag-tab"
                  >
                    태그
                  </div>
                </div>
              </div>
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
