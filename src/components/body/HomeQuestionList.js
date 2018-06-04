import React from 'react';
import HomeEachQuestion from './HomeEachQuestion';
import BrowserCheckSign from '../../browsercheck/sign';

// require('bootstrap/less/bootstrap.less');

const HomeQuestionList = ({ posts, isLoggedIn }) => (
  <div className="questContainer">
    <div className="questionMain">
      <HomeEachQuestion questions={posts} isLoggedIn={isLoggedIn} />      
    </div>  
  </div>
);

export default HomeQuestionList;
