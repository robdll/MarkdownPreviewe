import logo from './resources/logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

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
      </header>
    </div>
  );
}

export default App;
