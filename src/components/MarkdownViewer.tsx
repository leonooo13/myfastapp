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
    const handleCopy = () => {
        navigator.clipboard.writeText(markdown).then(() => {
            alert('Markdown 已复制到剪贴板！');
        }).catch(err => {
            alert('复制失败: ' + err);
        });
    };

    return (
        <div className="markdown-editor-container">
            <div className="top-bar">
                <button onClick={handleCopy} className="copy-button">
                    复制 Markdown
                </button>
            </div>
            <div className="content">
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
        </div>
    );
}

export default MarkdownEditor;
