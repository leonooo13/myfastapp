import React, { useState, useEffect } from 'react';
import './ResumeEditor.css';
import '../App.css';
import { FaUser, FaEnvelope, FaFileExport } from 'react-icons/fa';


interface ResumeSection {
  title: string;
  content: string;
}

const ResumeEditor: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [sections, setSections] = useState<ResumeSection[]>([
    { title: '个人简介', content: '' },
    { title: '工作经历', content: '' },
    { title: '教育背景', content: '' },
    { title: '技能', content: '' },
  ]);

  const handleSectionChange = (index: number, content: string) => {
    const newSections = [...sections];
    newSections[index].content = content;
    setSections(newSections);
  };

  const printResume = () => {
    window.print();
  };

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @media print {
        body * {
          visibility: hidden;
        }
        .preview-section, .preview-section * {
          visibility: visible;
        }
        .preview-section {
          position: absolute;
          left: 0;
          top: 0;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="resume-editor">
      <div className="editor-header">
        <h1 className="editor-title">简历优化器</h1>
        <div className="header-right">
          <button className="export-button" onClick={printResume}>
            <FaFileExport className="button-icon" />
            打印简历
          </button>
        </div>
      </div>
      <div className="editor-container">
        <div className="editor-section">
          <div className="personal-info">
            <div className="input-group">
              <FaUser className="input-icon" />
              <input
                type="text"
                placeholder="姓名"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-group">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                placeholder="邮箱"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="sections-container">
            {sections.map((section, index) => (
              <div key={index} className="resume-section">
                <h2>{section.title}</h2>
                <textarea
                  value={section.content}
                  onChange={(e) => handleSectionChange(index, e.target.value)}
                  placeholder={`输入你的${section.title}...`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="preview-section">
          <h2 className="preview-title">实时预览</h2>
          <div className="resume-preview">
            <div className="preview-header">
              <h3 className="preview-name">{name || '你的姓名'}</h3>
              <p className="preview-email">{email || 'your.email@example.com'}</p>
            </div>
            <div className="preview-content">
              {sections.map((section, index) => (
                <div key={index} className="preview-section">
                  <h4 className="preview-section-title">{section.title}</h4>
                  <p className="preview-section-content">
                    {section.content || `这里将显示你的${section.title}`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

        
export default ResumeEditor;