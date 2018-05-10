import React from 'react';
import { Input, Button, Form, Divider, Icon, Segment } from 'semantic-ui-react';
// import 'react-flexview/lib/flexView.css';
// import FlexView from 'react-flexview';
import '../../styles/css/Auth.css';

const Auth = () => (
  <div className="authContainer">
    <div className="authInputContainer">
      <div className="authButtonContainer">
        <Button fluid color="google plus" className="connectLogin">
          <Icon name="google plus" /> Google Plus
        </Button>
      </div>
      <div className="authButtonContainer">
        <Button fluid color="facebook" className="connectLogin">
          <Icon name="facebook" /> Facebook
        </Button>
      </div>
      <Divider horizontal className="authDivider">
        OR
      </Divider>
      <div className="authFormContainer">
        <Form action="http://localhost:3001/auth/signin" method="post">
          <Form.Field>
            <Input icon="at" name="email" placeholder="E-mail address" size="medium" />
          </Form.Field>
          <Form.Field>
            <Input
              icon="lock"
              name="password"
              type="password"
              placeholder="password"
              size="medium"
            />
          </Form.Field>
          <Button type="submit">Sign In dude</Button>
        </Form>
      </div>
      <Segment textAlign="center">
        <p>
          Did you forget your password? <a href="/">Find</a>
        </p>
        <p>
          Don't you have an account? <a href="/">Sign Up</a>
        </p>
      </Segment>
    </div>
  </div>
);

export default Auth;
