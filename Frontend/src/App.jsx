import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios'
import './App.css'

function App() {
  const [ count, setCount ] = useState(0)
  const [ code, setCode ] = useState(` type or paste your code here...`)

  const [ review, setReview ] = useState(``)

  useEffect(() => {
    prism.highlightAll()
  }, [])

  async function reviewCode() {
    const response = await axios.post('http://localhost:3000/ai/get-review', { code })
    setReview(response.data)
  }

  return (
    <>
      <main class="container">
  <div className="left">
    <div className="code">
      <Editor
        value={code}
        onValueChange={code => setCode(code)}
        highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 16,
          
          borderRadius: "5px",
          height: "100%",
          width: "100%",
          height: "auto", 
    minHeight: "800px", 
    maxHeight: "100%",
    overflow: "auto"
        }}
      />
    </div>
    <button
      onClick={reviewCode}
      className="review"
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Review
    </button>
  </div>
  <div className="right">
    <Markdown
      rehypePlugins={[rehypeHighlight]}
    >
      {review}
    </Markdown>
  </div>
</main>
    </>
  )
}



export default App