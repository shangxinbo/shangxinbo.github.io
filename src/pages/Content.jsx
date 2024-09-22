import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import 'github-markdown-css'

const App = () => {
  let { file } = useParams();

  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch("/md/defineProperty.md")
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div class="markdown-body">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
};

export default App;