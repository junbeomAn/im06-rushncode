import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

import '../../styles/css/Forum.css';

const Forum = ({ data }) => (
  <div className="Container">
    {data.map(item => (
      <div className="Forum">
        <h2>{item.title}</h2>
        <p>{item.body}</p>
        <Button className="button">click here</Button>
      </div>
    ))}
  </div>
);

Forum.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Forum;
