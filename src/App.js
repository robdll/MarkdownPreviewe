import logo from './resources/logo.svg';
import './App.css';
import { useState } from 'react';
import { marked } from 'marked';

function App() {

  marked.setOptions({
    breaks: true,
    gfm: true
  });
  
  const initialState = `# Example Title
## Example Subtitle

### Example Heading

Example text in **bold** **italic** and ~~Strikethrough~~

Example blockQuote
> The way to love anything is to realize that it may be lost.

Example [Link](https://robertodilillo.dev)

here is some inline code: \`console.log('Hello Wordl')\`

here is a code block:
\`\`\`
function welcome() {
  var myWelcome = 'Hello Wordl';
  console.log(myWelcome);
}
\`\`\`

Here is a bullet list:
- With different
  - indentation
     - level

Here is a numbered list
  1. With repeated
  1. number

And an image:

![Logo Rob.dll](https://www.robertodilillo.dev/resources/robdll-logo.svg)

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
