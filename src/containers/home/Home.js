import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Advertisement } from 'semantic-ui-react';
import { fetchQuestionList, getSortedResult } from '../../redux/actions/questionAction';
import HomeShowcase from '../../components/showcases/HomeShowcase';
import HomeQuestionList from '../../components/body/HomeQuestionList';

export class Home extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchQuestionList(1);
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    const { questions, fetchQuestionList, getSortedResult } = this.props;
    console.log(this.props);
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
                      onClick={() => { fetchQuestionList(1); }}
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
                      onClick={() => { getSortedResult(1, 'view'); }}
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
                      onClick={() => { getSortedResult(1, 'reward'); }}
                    >
                      금액
                    </a>
                  </div>
                </nav>
                {/* ------------------------네비게이션 바--------------------------------------------- */}
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-default"
                    role="tabpanel"
                    aria-labelledby="nav-default-tab"
                  >
                    {<HomeQuestionList posts={questions} /> || 'loading questions'}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-like"
                    role="tabpanel"
                    aria-labelledby="nav-like-tab"
                  >
                    {<HomeQuestionList posts={questions} /> || 'loading questions'}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-reward"
                    role="tabpanel"
                    aria-labelledby="nav-reward-tab"
                  >
                    {<HomeQuestionList posts={questions} /> || 'loading questions'}
                  </div>
                </div>               
              </div>
              <div className="home-lower-left-main">left-main</div>
            </div>
            <div className="home-lower-right">
              <div className="home-lower-right-main">
                <h4>교육, 강의 플랫폼</h4> 
                <hr />
                <a href="https://codestates.com/">코드스테이츠</a><br />
                <a href="https://opentutorials.org/course/1">생활코딩</a><br />
                <a href="https://www.inflearn.com/">인프런</a><br />   
                <a href="https://www.udemy.com/">Udemy</a><br />
                <a href="https://www.codecademy.com/">Codecademy</a><br />
                <a href="https://www.coursera.org/">Coursera</a><br />
                <h4>알고리즘</h4>
                <hr />
                <a href="https://programmers.co.kr/">프로그래머스</a><br />
                <a href="http://www.codewars.com/">Codewars</a><br />
                <a href="https://leetcode.com/">Leetcode</a>
                <h4>블로그, 문서 </h4>
                <hr />
                <a href="https://velopert.com/">Velopert</a><br />
                <a href="https://developer.mozilla.org/ko/">MDN</a>
                <h4>유틸리티 </h4>
                <hr />
                <a href="http://pythontutor.com/">파이썬튜터</a><br />                
              </div>
              <div className="home-lower-right-second">
                <Advertisement unit="vertical rectangle">
                  <ins
                    className="adsbygoogle"
                    data-ad-client="ca-pub-4591861188995436"
                    data-ad-format="auto"
                    data-ad-slot="4640466102"
                    style={{ display: 'block' }}
                  />
                </Advertisement>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.questions.items,
});

export default connect(mapStateToProps, { fetchQuestionList, getSortedResult })(Home);



// <ul className="nav nav-tabs">
// <li className="nav-item">
//   <a className="nav-link active" href="#">
//     최신
//   </a>
// </li>
// <li className="nav-item">
//   <a className="nav-link" href="#">
//     인기
//   </a>
// </li>
// <li className="nav-item">
//   <a className="nav-link" href="#">
//     금액
//   </a>
// </li>
// <li className="nav-item">
//   <a className="nav-link" href="/tag">
//     태그
//   </a>
// </li>
// </ul> 