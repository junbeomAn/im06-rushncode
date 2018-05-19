import React from 'react';
import { Segment, Grid, Image } from 'semantic-ui-react';
import RankShowcase from '../showcases/RankShowcase';
import '../../styles/css/Rank.css';

const arr = [1, 2, 3, 4, 5];

const Rank = () => (
  <div className="rankContainer">
    <RankShowcase />
    <div className="rankUpper">check your rank dude!!</div>
    <div className="rankSegment">
      {arr.map(() => (
        <Grid columns="equal">
          <Grid.Row divided>
            <Grid.Column>
              <Segment>
                <a href="javascript:void(0);">
                  <Image
                    size="tiny"
                    src="https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png"
                  />
                </a>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <a href="javascript:void(0);">
                  <Image
                    size="tiny"
                    src="https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png"
                  />
                </a>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <a href="javascript:void(0);">
                  <Image
                    size="tiny"
                    src="https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png"
                  />
                </a>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <a href="javascript:void(0);">
                  <Image
                    size="tiny"
                    src="https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png"
                  />
                </a>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      ))}

      {/* <Segment.Group vertical>
        {arr.map(item => (
          <Segment.Group horizontal>
            <Segment>{item}</Segment>
            <Segment>{item}</Segment>
            <Segment>{item}</Segment>
            <Segment>{item}</Segment>
          </Segment.Group>
          ))}
      </Segment.Group> */}
    </div>
  </div>  
);

export default Rank;
 
