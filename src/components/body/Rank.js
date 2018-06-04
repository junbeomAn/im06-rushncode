import React from 'react';
import { Segment, Grid, Image, Input } from 'semantic-ui-react';
import RankShowcase from '../showcases/RankShowcase';
import '../../styles/css/Rank.css';
import { URL_API } from '../../config';


const Rank = ({
  userInfo,
  handleUserClick,
  valueChange,
  userSearch,
}) => (
  <div className="rankContainer">
    <RankShowcase />
    <div className="rankUpper">
      <Input
        className="user-search-bar"
        size="huge"
        icon="search"
        onChange={valueChange}
        onKeyPress={e => userSearch(e)}
        iconPosition="right"
        placeholder="유저 검색"
      />
    </div>
    <div className="rankSegment">
      <Grid columns={4} padded>
        {userInfo.map((item, index) => (
          <Grid.Column divided key={item.id} mobile={16} tablet={8} computer={4}>
            <Segment basic className="segment">
              <Image
                onClick={() => handleUserClick(`/mypage/${item.id}`)}
                src={`${URL_API}/image/${item.image}_mini.png`}
                className="rank-image"
              />
              <div className="rank-info">
                {/* <span className="grid-top">순위</span>
                <span className="grid-middle grid-top">이름</span>
                <span className="grid-top">누적 이더</span> */}
                <span className="rank-name" onClick={() => handleUserClick(`/mypage/${item.id}`)}>{item.username}</span>
                <span className="rank"><span>{index + 1}</span></span>
                <span className="total-reward"><span>{item.total_reward}</span></span>
              </div>
            </Segment>
          </Grid.Column>
        ))}
      </Grid>
    </div>
  </div>
);

export default Rank;
