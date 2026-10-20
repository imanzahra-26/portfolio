// Navbar.jsx — Includes Dark/Light Mode Toggle as requested by Datheon
import { useState, useEffect } from 'react';

function Navbar() {
  // State to track if we are in dark mode
  const [isDark, setIsDark] = useState(false);

  // When the toggle changes, add/remove a class on the <body> tag
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDark]);

  return (
    <nav className="navbar">
      <div className="nav-logo">Iman Zahra.</div>
      
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        
        {/* THE DARK MODE TOGGLE BUTTON */}
        <button 
          onClick={() => setIsDark(!isDark)} 
          className="theme-toggle-btn"
          title="Toggle Theme"
        >
          {isDark ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;