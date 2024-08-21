import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaHome, FaMarkdown, FaNewspaper, FaUser, FaFileAlt, FaSignInAlt } from 'react-icons/fa';
import Login from './pages/Login';
import Article from './pages/Article';
import MarkdownEditor from './components/MarkdownViewer';
import Profile from './pages/Profile';
import ResumeEditor from './pages/ResumeEditor';
import LuTodo from './pages/LuTodo';
import './App.css';
import './Navbar.css';

const Navbar: React.FC = () => {
  const navItems = [
    { name: 'Home', icon: FaHome },
    { name: 'Markdown Editor', icon: FaMarkdown },
    { name: 'Article', icon: FaNewspaper },
    { name: 'Profile', icon: FaUser },
    { name: 'Resume', icon: FaFileAlt },
    { name: 'Login', icon: FaSignInAlt },
  ];

  return (
    <nav className="navbar">
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <Link to={item.name === 'Home' ? '/' : `/${item.name.toLowerCase().replace(' ', '')}`}>
              <item.icon />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const App: React.FC = () => {
  return (
    <Router>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        backgroundColor: '#f0f2f5'
      }}>
        <Navbar />
        <main style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="markdown" element={<MarkdownEditor />} />
            <Route path="article" element={<Article />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
            <Route path='resume' element={<ResumeEditor/>}/>
            <Route index element={<LuTodo/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;