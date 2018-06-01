import React, { Component } from 'react';
import { Message } from 'semantic-ui-react';
import { isChrome } from './index';
import BrowserDetect from './check';

class BrowserCheckSign extends Component {
  state = {
    visible: true,
  };

  handleDismiss = () => {
    this.setState({ visible: false });
    if (!isChrome) {
      setTimeout(() => {
        this.setState({ visible: true });
      }, 3000);
    }
  }

  render() {
    if (this.state.visible) {
      return (
        <Message
          onDismiss={this.handleDismiss}
          header="구글 크롬 브라우저가 사이트에 가장 적합합니다."
          content={`현재 ${BrowserDetect()} 브라우저로 접속중입니다. 크롬 브라우저 다운하러 가기`}
          className="brwsrCheck"
        />
      );
    } else {
      return (
        <i className="close-message" />
      );  
    }
    
  }
}
export default BrowserCheckSign;
