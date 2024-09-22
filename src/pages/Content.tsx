import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import 'github-markdown-css'

const App = () => {
  const { file } = useParams()

  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    fetch('/md/defineProperty.md')
      .then(res => res.text())
      .then(text => setMarkdown(text))
  }, [])

  return (
    <div className="markdown-body">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  )
}

export default App
