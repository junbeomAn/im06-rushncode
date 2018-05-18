import React, { Component } from 'react';
import ReactMarkDown from 'react-markdown';

class MarkDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: '',
    };
  }

  changeValue = (e) => {
    e.preventDefault();
    this.setState({
      src: e.target.value,
    });
  };

  render() {
    console.log(document.getElementById('markdownvalue'));
    return (
      <div>
        <textarea
          name="content"
          onChange={e => this.changeValue(e)}
          id="markdownvalue"
          cols="30"
          rows="10"
        >
          hello
        </textarea>
        <ReactMarkDown source={this.state.src} />
      </div>
    );
  }
}

export default MarkDown;
