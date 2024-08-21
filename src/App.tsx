import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './pages/Login';
import Article from './pages/Article';
import MarkdownEditor from './components/MarkdownViewer';
import Profile from './pages/Profile';
import ResumeEditor from './pages/ResumeEditor';
import './App.css';

const Navbar: React.FC = () => {
  return (
    <nav style={{
      backgroundColor: '#f8f9fa',
      padding: '15px 0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0
      }}>
        {['Home', 'Markdown Editor', 'Article', 'Profile', 'Resume', 'Login'].map((item, index) => (
          <li key={index} style={{ margin: '0 15px' }}>
            <Link 
              to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`}
              style={{
                color: '#333',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: 500,
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#007bff'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#333'}
            >
              {item}
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
            <Route path="/markdown" element={<MarkdownEditor />} />
            <Route path="/article" element={<Article />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path='/resume' element={<ResumeEditor/>}/>
            <Route path='/' element={<Profile/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;