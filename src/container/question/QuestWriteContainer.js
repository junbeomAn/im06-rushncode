import React, { Component } from 'react';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';

export class QuestWrite extends Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
  }
  render() {
    return (
      <div>
        <h1>11</h1>
        <Editor editorState={this.state.editorState} />
      </div>
    );
  }
}

export default QuestWrite;
