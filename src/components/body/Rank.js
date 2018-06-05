import React from 'react';
import { Segment, Grid, Image, Input, Label, Icon } from 'semantic-ui-react';
import RankShowcase from '../showcases/RankShowcase';
import '../../styles/css/Rank.css';
import { URL_API } from '../../config';

const Rank = ({
  userInfo, handleUserClick, valueChange, userSearch,
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
      <Grid columns={1} padded className="rank-box">
        {userInfo.map((item, index) => (
          <Grid.Column divided key={item.id} mobile={16} tablet={16} computer={16} className="card">
            {index < 10 &&
              index > 2 && (
                <Label color="blue" ribbon>
                  <Icon name="chess knight" size="large" />
                  탑 10
                </Label>
              )}
            {index === 0 && (
              <Label as="a" color="black" className="rank-first" ribbon>
                {/* <Icon loading name="spinner" size="large" /> */}
                <Icon name="chess king" size="large" className="rank-first" />
                <span className="rank-first">전장의 지배자</span>
              </Label>
            )}
            {index === 1 && (
              <Label as="a" color="black" ribbon>
                {/* <Icon loading name="spinner" size="large" /> */}
                <Icon name="chess queen" size="large" className="rank-second" />
                <span className="rank-second">이인자</span>
              </Label>
            )}
            {index === 2 && (
              <Label as="a" color="black" ribbon>
                {/* <Icon loading name="spinner" size="large" /> */}
                <Icon name="chess queen" size="large" className="rank-third" />
                <span className="rank-third">삼인자</span>
              </Label>
            )}
            <Segment basic className="segment">
              <div className="rank-num">{index + 1}</div>
              <Image
                onClick={() => handleUserClick(`/mypage/${item.id}`)}
                src={`${URL_API}/image/${item.image}_mini.png`}
                className="rank-image"
              />
              <div className="rank-info-box">
                <div className="rank-info-top">
                  <span className="rank-name" onClick={() => handleUserClick(`/mypage/${item.id}`)}>
                    {item.username}
                  </span>
                  <span className="total-reward">
                    <span>
                      {item.total_reward} <span className="ether">ether</span>
                    </span>
                  </span>
                </div>
                <div className="rank-info-bot">
                  안녕하세여 정의롭고 공평한 세상을 꿈꾸는 소년 전한길 입니다.
                </div>
              </div>
            </Segment>
          </Grid.Column>
        ))}
      </Grid>
    </div>
  </div>
);

export default Rank;
