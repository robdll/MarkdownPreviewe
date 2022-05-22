import logo from './resources/logo.svg';
import './App.css';
import { useState } from 'react';
import Markdown from "marked-react";

function App() {

  const initialState = `
    # Welcome to my React Markdown Previewer!

    ## This is a sub-heading...
    ### And here's some other cool stuff:

    You can also make text **bold**... whoa!  
    Or _italic_.  
    Or... wait for it... **_both!_**  
    And feel free to go crazy ~~crossing stuff out~~.

    Heres some code, \`<div></div>\`, between 2 backticks.

    \`\`\`
    // this is multi-line code:
    function anotherExample(firstLine, lastLine) {
      if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
        return multiLineCode;
      }
    }
    \`\`\`  

    There's also [links](https://robertodilillo.dev), and
    > Block Quotes!

    And if you want to get really crazy, even tables:

    Wild Header | Crazy Header | Another Header?
    ------------ | ------------- | -------------
    Your content can | be here, and it | can be here....
    And here. | Okay. | I think we get it.

    - And of course there are lists.
      - Some are bulleted.
          - With different indentation levels.
            - That look like this.


    1. And there are numbered lists too.
    1. Use just 1s if you want!
`


  const [ mdText, setMdText] = useState(initialState)

  const handleChange = (event) => {
    setMdText(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Markdown Previewer</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <textarea id="editor" value={mdText} onChange={handleChange} ></textarea>
        <div id="preview">
          <Markdown breaks="true" gfm="true">{mdText}</Markdown>
        </div>
      </header>
    </div>
  );
}

export default App;
