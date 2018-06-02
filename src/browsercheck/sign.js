import React, { Component } from 'react';
import { Message } from 'semantic-ui-react';
import BrowserDetect from './check';

class BrowserCheckSign extends Component {
  state = {
    visible: true,
  };

  handleDismiss = () => {
    this.setState({ visible: false });
    setTimeout(() => {
      this.setState({ visible: true });
    }, 3000);
  }

  render() {
    if (this.state.visible) {
      return (
        <Message
          floating
          warning
          onDismiss={this.handleDismiss}
          className="brwsrCheck"
        >
          <Message.Header>구글 크롬 브라우저가 사이트에 가장 적합합니다.</Message.Header>
          <p>현재 {BrowserDetect()} 브라우저로 접속중입니다. <a href="https://www.google.com/chrome/" target="_blank" without="true" rel="noopener noreferrer"className="dwnld-chrome">크롬 브라우저 다운하러 가기</a></p>
        </Message>
      );
    } else {
      return (
        <i className="close-message" />
      );  
    }
    
  }
}
export default BrowserCheckSign;
