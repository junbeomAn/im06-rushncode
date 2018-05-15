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
              <a href="javascript:void(0);">
                1111
              </a>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <a href="javascript:void(0);">
                2222
              </a>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <a href="javascript:void(0);">
                3333
              </a>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <a href="javascript:void(0);">
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
