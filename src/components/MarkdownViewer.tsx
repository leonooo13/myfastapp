import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './MarkdownViewer.css';

const MarkdownEditor: React.FC = () => {
    const [markdown, setMarkdown] = useState<string>(() => {
        const savedContent = localStorage.getItem('markdownContent');
        return savedContent || '# 请输入 Markdown 源代码'; // 从本地存储加载内容
    });
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newContent = event.target.value;
        setMarkdown(newContent);
        localStorage.setItem('markdownContent', newContent); // 保存到本地存储
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
