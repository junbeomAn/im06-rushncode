import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import { Redirect } from 'react-router';



const Loading = () => (
  <Dimmer active>
    <Loader>
      <h1>l o a d i n g . . .</h1>
      <Redirect to={window.location.href.split('/loading')[1]} />
    </Loader>
  </Dimmer>
);

export default Loading;
