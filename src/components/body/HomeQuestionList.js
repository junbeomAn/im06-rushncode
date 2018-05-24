import React from 'react';
import HomeEachQuestion from './HomeEachQuestion';


// require('bootstrap/less/bootstrap.less');

const HomeQuestionList = ({ posts }) => (
  <div className="questContainer">
    <div className="questionMain">
      <HomeEachQuestion questions={posts} />
    </div>
  </div>
);

export default HomeQuestionList;
