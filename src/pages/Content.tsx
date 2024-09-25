import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import useDocFile from '../hooks/useDocFile'

import 'github-markdown-css'

const App = () => {
  const [markdown, setMarkdown] = useState('')
  const { getDoc, list } = useDocFile()
  const { file } = useParams()

  useEffect(() => {
    if (file && list.length > 0) {
      const fileObject = getDoc(file)
      if (fileObject) {
        const path = new URL(fileObject.path, window.location.origin)
        fetch(path.pathname)
          .then(res => res.text())
          .then(text => setMarkdown(text))
      }
      else {
        setMarkdown('未发现有效内容')
      }
    }
  }, [file, list, getDoc])

  return (
    <div className="w-[1200px] p-5 min-h-[600px] markdown-body">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  )
}

export default App
