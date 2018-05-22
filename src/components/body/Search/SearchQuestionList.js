import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchEachQuestion from './SearchEachQuestion';
import SearchPagenation from './SearchPagenation';

// require('bootstrap/less/bootstrap.less');

const SearchQuestionList = ({
  posts,
  updateStartEndPage,
  makeAsync,
  currentPage,
  start,
  end,
}) => (
  <div className="questContainer">
    <form className="form-inline search-form">
      <input
        className="form-control input-form mr-sm-2"
        type="search"
        placeholder="Enter Keywords"
        aria-label="Search"
      />
      <NavLink to={`/search?q=`} >
        <button className="btn btn-outline-dark my-2 my-sm-0">
        Search
        </button>
      </NavLink>
    </form>    
    <div className="questionMain">
      <SearchEachQuestion questions={posts} />
      <SearchPagenation
        updateStartEndPage={updateStartEndPage}
        makeAsync={makeAsync}
        count={posts[0].countQuestions}
        currentPage={currentPage}
        start={start}
        end={end}
      />
    </div>
  </div>
);

export default SearchQuestionList;
