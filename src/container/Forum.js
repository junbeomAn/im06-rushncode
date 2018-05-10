import React from 'react';
import PropTypes from 'prop-types';

const ForumList = ({ match }) => (
  <div>
    <span>{match.params.id}</span>
    번 페이지 입니다.
  </div>
);

ForumList.propTypes = {
  match: PropTypes.object.isRequired,
};
export default ForumList;
