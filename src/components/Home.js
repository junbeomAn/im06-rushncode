import React from 'react';
import { Input, Button, Form, Divider, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './Home.scss';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const Home = () => (
  <div className="container">
    <div className="upper">
      <div className="upper-content">aa</div>
      <div className="inputContainer">
        <Form action="/signup">
          <Form.Field>
            <Input fluid label="User name" type="text" placeholder="User name" size="large" />
          </Form.Field>
          <Form.Field>
            <Input fluid label="E-mail" placeholder="you@example.com" size="large" />
          </Form.Field>
          <Form.Field>
            <Input fluid label="Password" type="password" placeholder="********" size="large" />
          </Form.Field>
          <Button type="submit">Sign Up dude!</Button>
        </Form>
      </div>
    </div>
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

export default Home;
