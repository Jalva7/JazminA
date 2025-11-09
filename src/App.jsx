import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import React, { useState, useCallback } from 'react';
import './App.css';
import HomePage from './components/Homepage';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Blog from './components/Blog';
import Projects from './components/Projects';

function App() {
  const navItems = [
    { id: 'homepage', label: 'Home', ariaLabel: 'Navigate to Home Page' },
    { id: 'skills', label: 'Skills', ariaLabel: 'Navigate to Skills Page' },
    { id: 'resume', label: 'Resume', ariaLabel: 'Navigate to Resume Page' },
    { id: 'projects', label: 'Projects', ariaLabel: 'Navigate to Projects Page' },
    { id: 'blog', label: 'Blog', ariaLabel: 'Navigate to Blog Page' },
  ];

  return (
  <BrowserRouter basename='/JazminA'>
    <div className="app">
      <div className='animmated-header'>
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className="circle4"></div>
          </div>
      {/* Header */}
      <header className="header-wrap" role='banner'>
        <div className="header-container">
          <div className="nav-title">
            <h1>JazminA</h1>
          </div>
          <nav className="nav-container" role='navigation'>
            <ul className="onepage-nav">
              {navItems.map((item) => (
                <li key={item.id}>
                  <NavLink 
                    to={item.id === 'homepage' ? '/' : `/${item.id}`} 
                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                    aria-label={item.ariaLabel}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      

    {/* ROUTES */}
    <main role='main'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/projects' element={<Projects />} /> 
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </main>

     {/* Footer */}
      <footer className="footer" role="contentinfo">
        <p>© 2025 Jazmin Alvarado</p>
        <p>Built with React</p>
      </footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
