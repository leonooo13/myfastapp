import React, { useState } from 'react';
import './ResumeEditor.css';
import '../App.css';
import { jsPDF } from 'jspdf';

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

  const exportToPDF = () => {
    const doc = new jsPDF();
    const lineHeight = 7;
    let yOffset = 20;

    // 设置字体
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text(name, 105, yOffset, { align: "center" });
    yOffset += lineHeight * 2;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(email, 105, yOffset, { align: "center" });
    yOffset += lineHeight * 2;

    sections.forEach(section => {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.text(section.title, 10, yOffset);
      yOffset += lineHeight;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
      const splitContent = doc.splitTextToSize(section.content, 190);
      doc.text(splitContent, 10, yOffset);
      yOffset += lineHeight * (splitContent.length + 1);
    });

    doc.save('resume.pdf');
  };

  return (
    <div className="resume-editor">
      <h1>简历优化器</h1>
      <div className="editor-container">
        <div className="editor-section">
          <div className="personal-info">
            <input
              type="text"
              placeholder="姓名"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="邮箱"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
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
          <button className="export-button" onClick={exportToPDF}>导出为PDF</button>
        </div>
        <div className="preview-section">
          <h2>实时预览</h2>
          <div className="resume-preview">
            <h3>{name}</h3>
            <p>{email}</p>
            {sections.map((section, index) => (
              <div key={index}>
                <h4>{section.title}</h4>
                <p>{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeEditor;