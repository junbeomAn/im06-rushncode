import React from 'react';
import { Divider, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const HomeSignedIn = () => (
  <div className="container">
    <div className="lower">
      <div className="lowerLeft">
        <Segment>
          {arr.map(item => (
            <div>
              <div className="post">{item}</div>
              <Divider section />
            </div>
          ))}
        </Segment>
      </div>
      <div className="lowerRight">aa</div>
    </div>
  </div>
);

export default HomeSignedIn;
