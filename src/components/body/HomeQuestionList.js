import React from 'react';
import HomeEachQuestion from './HomeEachQuestion';

// require('bootstrap/less/bootstrap.less');

const HomeQuestionList = ({ posts, isLoggedIn }) => (
  <div className="questContainer">
    <div className="questionMain">
      <HomeEachQuestion questions={posts} isLoggedIn={isLoggedIn} />
    </div>
  </div>
);

export default HomeQuestionList;
