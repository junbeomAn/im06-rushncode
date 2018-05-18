import React, { Component } from 'react';
import { brace, edit } from 'brace';
import * as ace from 'brace';
import AceEditor from 'react-ace';
import { Divider, Button, Icon } from 'semantic-ui-react';
// import './../../styles/css/CodeBlockContainer.css';
import './../../ace_editor/aceModes';
import './../../ace_editor/aceThemes';


const lang = 'javascript,python,java,sass,scss,sql,swift,django,c_cpp,csharp,ejs,css,ruby,mysql,pascal,php,r,scala,xml'.split(',').sort();
const theme = 'ambiance,chaos,chrome,clouds_midnight,clouds,cobalt,crimson_editor,dawn,dracula,dreamweaver,eclipse,github,gob,gruvbox,idle_fingers,iplastic,katzenmilch,kr_theme,kuroir,merbivore_soft,merbivore,mono_industrial,monokai,pastel_on_dark,solarized_dark,solarized_light,sqlserver,terminal,textmate,tomorrow_night_blue,tomorrow_night_bright,tomorrow_night_eighties,tomorrow_night,tomorrow,twilight,vibrant_ink,xcode'.split(',');

class CodeBlockCntr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'javascript',
      theme: 'ambiance',
      editor: false,
    };
    this.changeLanguage = this.changeLanguage.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
    this.toggleEditor = this.toggleEditor.bind(this);
  }

  onChange() {
    console.log(edit('ace-editor').getValue()); // ///////// getting content
    // console.log(edit('ace-editor').getSession().getMode()); //////////get current language mode
    // console.log(edit('ace-editor').getTheme()); ////////// get current theme
  }

  changeTheme() {
    console.log(this);
    const selection = document.getElementById('themeSelect');
    const value = selection.options[selection.selectedIndex].value;
    console.log(value);
    this.setState({
      theme: value,
    });
  }

  changeLanguage() {
    console.log(this);
    const selection = document.getElementById('questionLanguageSelect');
    const value = selection.options[selection.selectedIndex].value;
    console.log(value);
    this.setState({
      mode: value,
    });
  }
  toggleEditor() {
    this.setState({
      editor: !(this.state.editor),
    });
  }

  render() {
    return (
      <div id="aceEditor">
        <Button icon onClick={this.toggleEditor} >
          <Icon name="code" />  code editor
        </Button>
        {this.state.editor ?
          <div id="aceContainer">
            <select className="custom-select col-md-3" onChange={this.changeLanguage} id="questionLanguageSelect">
              <option defaultValue value="javascript">choose programming language</option>
              {lang.map((item, i) => <option value={item} key={i} >{item}</option>)}
            </select>
            <select className="custom-select col-md-3" onChange={this.changeTheme} id="themeSelect">
              <option defaultValue value="ambiance">choose theme you want</option>
              {theme.map((item, i) => <option value={item} key={i} >{item}</option>)}
            </select>
            <AceEditor
              mode={this.state.mode}
              theme={this.state.theme}
              name="ace-editor"
              // onLoad={this.onLoad}
              onChange={this.onChange}
              // style={{ display: 'inline' }}
              height="300px"
              width="100%"
              enableBasicAutocompletion
              enableLiveAutocompletion
              onFocus={console.log('focusOnAce')}
              fontSize={14}
              showPrintMargin
              showGutter
              highlightActiveLine
              value="//YOUR CODE GOES HERE"
              setOptions={{
                enableSnippets: true,
                showLineNumbers: true,
                tabSize: 2,
        }}
            />
          </div>
            : null }


        {/* <AceEditor
          mode="javascript"
          theme="monokai"
          name="ace-editor"
          readOnly={true}//
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          value={`// YOUR CODE GOES HERE`}
          setOptions={{
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
          }}/> */}
      </div>
    );
  }
}
// const Job = () => (

// );

export default CodeBlockCntr;
