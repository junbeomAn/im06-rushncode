import React from 'react';
import { Segment, Grid, Image } from 'semantic-ui-react';
// import {  } from 'react-router';
import RankShowcase from '../showcases/RankShowcase';
import '../../styles/css/Rank.css';
import { URL_API } from '../../config';


const Rank = ({ userInfo }) => (
  <div className="rankContainer">
    <RankShowcase />
    {/* <div className="rankUpper">
      <Input
        className="user-search-bar"
        size="huge"
        icon="search"
        onChange={valueChange}
        onKeyPress={e => tagSearch(e)}
        iconPosition="left"
        placeholder="유저 검색"
      />
    </div> */}
    <div className="rankSegment">
      {userInfo.map(item => (
        <Grid columns="equal">
          <Grid.Row divided>
            <Grid.Column>
              <Segment className="segment">
                <Image
                  size="mini"
                  src={`${URL_API}/image/${item.image}_mini.png`}
                  className="rank-image"
                  // onClick={() => { handleUserClick() }}
                />
                <div>
                  <span>{item.username}</span><br />
                  <span>{item.total_reward} 이더</span><br />
                </div>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment className="segment">
                <Image
                  size="mini"
                  src={`${URL_API}/image/${item.image}_mini.png`}
                  className="rank-image"
                  // onClick={() => { handleUserClick() }}
                />
                <div>
                  <span>{item.username}</span><br />
                  <span>{item.total_reward} 이더</span><br />
                </div>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment className="segment">
                <Image
                  size="mini"
                  src={`${URL_API}/image/${item.image}_mini.png`}
                  className="rank-image"
                  // onClick={() => { handleUserClick() }}
                />
                <div>
                  <span>{item.username}</span><br />
                  <span>{item.total_reward} 이더</span><br />
                </div>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment className="segment">
                <Image
                  size="mini"
                  src={`${URL_API}/image/${item.image}_mini.png`}
                  className="rank-image"
                  // onClick={() => { handleUserClick() }}
                />
                <div>
                  <span>{item.username}</span><br />
                  <span>{item.total_reward} 이더</span><br />
                </div>
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
