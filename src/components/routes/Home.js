import React from 'react';
import { Input, Button, Form, Divider, Icon } from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css';
import '../../styles/css/Home.css';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];

const Home = () => (
  <div className="container">
    <div className="upper">
      <div className="upper-content">aa</div>
      <div className="homeInputContainer">
        <div className="buttonContainer">
          <Button.Group widths="3">
            <Button color="google plus">
              <Icon name="google plus" /> Google Plus
            </Button>
            <Button color="facebook">
              <Icon name="facebook" /> Facebook
            </Button>
            <Button>Sign In</Button>
          </Button.Group>
        </div>
        <Divider horizontal>OR</Divider>
        <Form action="http://localhost:3001/auth/signup" method="post">
          <Form.Field>
            <Input
              fluid
              icon="user"
              name="username"
              type="text"
              placeholder="User name"
              size="large"
            />
          </Form.Field>
          <Form.Field>
            <Input fluid icon="at" name="email" placeholder="E-mail address" size="large" />
          </Form.Field>
          <Form.Field>
            <Input
              fluid
              icon="lock"
              name="password"
              type="password"
              placeholder="password"
              size="large"
            />
          </Form.Field>
          <Button type="submit">Sign Up dude</Button>
        </Form>
      </div>
    </div>
    <div className="lower">
      <div>questions header</div>
      <div className="lowerLeft">
        {arr.map(item => (
          <div>
            <div className="post">
              <span className="postTitle">
                <a href="/">{item}</a>
              </span>
            </div>
            <hr align="center" />
          </div>
        ))}
      </div>
      <div className="lowerRight">
        <div className="lowerRightContent">
          aaa
        </div>
        <div className="lowerRightContent">
          aaa
        </div>
        <div className="lowerRightContent">
          aaa
        </div>
        <div className="lowerRightContent">
          aaa
        </div>
        <div className="lowerRightContent">
          aaa
        </div>
      </div>
    </div>
  </div>
);

export default Home;
