import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './MarkdownViewer.css';

const MarkdownEditor: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>('# 请输入 Markdown 源代码');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="markdown-editor-container">
      <div className="editor">
        <textarea
          value={markdown}
          onChange={handleChange}
          placeholder="在这里输入 Markdown 源代码..."
        />
      </div>
      <div className="preview">
        <ReactMarkdown>
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default MarkdownEditor;
