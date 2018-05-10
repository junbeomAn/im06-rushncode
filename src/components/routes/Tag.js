import React from 'react';
import { Input, Grid, Segment } from 'semantic-ui-react';
import '../../styles/css/Tag.css';

const Tag = () => {
  return (
    <div className="tagContainer">
      <div className="tagInputContainer">
        <Input placeholder="search tags here. . ." />
      </div>
      <Grid columns="equal">
        <Grid.Row divided>
          <Grid.Column>
            <Segment>
              <a href="#">
                1111
              </a>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <a href="#">
                2222
              </a>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <a href="#">
                3333
              </a>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <a href="#">
                4444
              </a>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      
    </div>
  );
};

export default Tag;
