import logo from './resources/logo.svg';
import './App.css';
import { useState } from 'react';
import { marked } from 'marked';

function App() {
  
  const renderer = new marked.Renderer();

  const [ mdText, setMdText] = useState('')

  const handleChange = (event) => {
    setMdText(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Markdown Previewer</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <textarea id="editor" value={mdText} onChange={handleChange} ></textarea>
        <div id="preview"
          dangerouslySetInnerHTML={{__html: marked(mdText, { renderer: renderer })}}>
        </div>
      </header>
    </div>
  );
}

export default App;
