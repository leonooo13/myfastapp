import React, { useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import './MarkdownViewer.css';

const MarkdownEditor: React.FC = () => {
    const [markdown, setMarkdown] = useState<string>(() => {
        const savedContent = localStorage.getItem('markdownContent');
        return savedContent || '# 请输入 Markdown 源代码';
    });

    const previewRef = useRef<HTMLDivElement>(null);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newContent = event.target.value;
        setMarkdown(newContent);
        localStorage.setItem('markdownContent', newContent);
    };

    const handleCopyMarkdown = () => {
        navigator.clipboard.writeText(markdown).then(() => {
            alert('Markdown 已复制到剪贴板！');
        }).catch(err => {
            alert('复制失败: ' + err);
        });
    };

    const handleCopyHtml = () => {
        if (previewRef.current) {
            const htmlContent = previewRef.current.innerHTML;
            navigator.clipboard.writeText(htmlContent).then(() => {
                alert('HTML 已复制到剪贴板！');
            }).catch(err => {
                alert('复制失败: ' + err);
            });
        }
    };

    const handleImageClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        const img = event.currentTarget;
        img.classList.toggle('zoomed');
    };

    const renderers = {
        image: (props: any) => (
            <img
                src={props.src}
                alt={props.alt}
                onClick={handleImageClick}
                style={{ cursor: 'zoom-in' }}
            />
        ),
    };

    return (
        <div className="markdown-editor-container">
            <div className="top-bar">
                <button onClick={handleCopyMarkdown} className="copy-button">
                    复制 Markdown
                </button>
                <button onClick={handleCopyHtml} className="copy-button">
                    复制 HTML
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
                <div className="preview" ref={previewRef}>
                    <ReactMarkdown components={renderers}>
                        {markdown}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    );
}

export default MarkdownEditor;
