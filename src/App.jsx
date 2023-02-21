import { useState } from "react";
import "./App.css";
import { marked } from "marked";
import Logo from './assets/markdo.png';

function App() {
  const [text, setText] = useState(`
  # H1
  ## H2 
  [title](https://www.example.com)
  \`code\` 
  \`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`

- First item
- Second item
- Third item

> blockquote

![alt text](image.jpg)

**bold text**
  `);

  marked.setOptions({
    breaks: true,
  });

  const changeText = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div id="container">
        <img id="logo" src={Logo} />
        <textarea name="text" id="editor" onChange={changeText}></textarea>
        <div id="output">
          <div
            id="preview"
            dangerouslySetInnerHTML={{
              __html: marked(text),
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default App;
