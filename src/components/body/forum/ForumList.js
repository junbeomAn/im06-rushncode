import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../../../styles/css/Forum.css';

const ForumList = ({ forums }) => (
  <div className="Container">
    {forums.map(item => (
      <div className="Forum" key={item.id}>
        <Link to={`forum/${item.id}`} href>
          <h2>{item.title}</h2>
        </Link>
        <p>{item.body}</p>
      </div>
    ))}
  </div>
);

ForumList.propTypes = {
  forums: PropTypes.array.isRequired,
};

export default ForumList;
