import React, { Component } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';

export class QuestWrite extends Component {
  constructor() {
    super();
    this.state = {};
  }
  handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);

    if (newState) {
      this.onchange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  render() {
    return (
      <div>
        <h1>Write Page</h1>
      </div>
    );
  }
}

export default QuestWrite;
