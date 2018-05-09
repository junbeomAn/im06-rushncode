import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../../styles/css/Forum.css';

const Forum = ({ data }) => (
  <div className="Container">
    {data.map(item => (
      <div className="Forum">
        <Link to={`forum/${item.id}`} href>
          <h2>{item.title}</h2>
        </Link>
        <p>{item.body}</p>
      </div>
    ))}
  </div>
);

Forum.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Forum;
