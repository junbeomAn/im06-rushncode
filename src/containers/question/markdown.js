import React, { Component } from 'react';
import ReactMarkDown from 'react-markdown';
import axios from 'axios';

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
  }

  postContent = () => {
    const data = {
      title: 'title',
      body: this.state.src,
      reward: 100,
      tags: 'js',
    }
    const config = {
      headers: {
        'x-access-token': localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
    };
    axios
      .post('http://localhost:3001/api/question/post', data, config)
      .then(res => console.log(res));
    // axios
    //   .get('http://localhost:3001/api/question/displayq/1')
    //   .then(res => res.body.replace(/(?:\r↵|\r|↵)/g, '\n'));
  }

  render() {
    // console.log(document.getElementById('markdownvalue'));
    return (
      <div>
        <textarea className="input_mark_down" name="content" onChange={e => this.changeValue(e)} id="markdownvalue" cols="70" rows="30" >hello</textarea>
        <ReactMarkDown className="mark_down_view" source={this.state.src} />
        <button onClick={this.postContent}>post button</button>
      </div>
    );
  }
}

export default MarkDown;

