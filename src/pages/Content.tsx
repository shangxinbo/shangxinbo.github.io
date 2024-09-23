import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import useDocFile from './useDocFile'

import 'github-markdown-css'

const App = () => {
  const [markdown, setMarkdown] = useState('')
  const { getDoc, list } = useDocFile()
  const { file } = useParams()

  const getFileContent = async () => {
    if (file) {
      const fileObject = getDoc(file)
      if (fileObject) {
        const path = new URL(fileObject.path, window.location.origin)
        fetch(path.pathname)
          .then(res => res.text())
          .then(text => setMarkdown(text))
      }
      else {
        // todo 没有内容
      }
    }
  }

  useEffect(() => {
    getFileContent()
  }, [list])

  return (
    <div className="w-[1200px] p-5 markdown-body">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  )
}

export default App
