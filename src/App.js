import logo from './resources/logo.svg';
import './App.css';
import { useState } from 'react';
import { marked } from 'marked';

function App() {

  marked.setOptions({
    breaks: true,
    gfm: true
  });
  
  const initialState = "# Welcome to my React Markdown Previewer!"
  const [ mdText, setMdText] = useState(initialState)

  const handleChange = (event) => {
    setMdText(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Markdown Previewer</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <textarea id="editor" value={mdText} onChange={handleChange} ></textarea>
      <Preview markdown={mdText} />
    </div>
  );
}


const Preview = (props) => {
  const renderer = new marked.Renderer();
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(props.markdown, { renderer: renderer })
      }}
      id="preview"
    />
  );
};

export default App;
