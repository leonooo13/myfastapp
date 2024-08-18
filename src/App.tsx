import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Article from './pages/Article';
import MarkdownEditor from './components/MarkdownViewer';
import './App.css'; // 如果有全局样式的话

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MarkdownEditor />} />
        <Route path="/article" element={<Article />} />
        <Route path="/markdown" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
