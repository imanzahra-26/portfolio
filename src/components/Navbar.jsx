import { useState, useEffect } from 'react';

function Navbar() {
  // State to track if dark mode is on
  const [isDark, setIsDark] = useState(false);

  // When the toggle changes, add/remove the 'dark-theme' class on the <body>
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDark]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <a href="#home" className="navbar-logo">
          Iman Zahra<span className="dot">.</span>
        </a>

        {/* Your exact list structure preserved */}
        <ul className="navbar-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          
          {/* THE THEME TOGGLE BUTTON */}
          <li>
            <button 
              onClick={() => setIsDark(!isDark)} 
              className="theme-toggle-btn"
            >
              {isDark ? '☀️ Light' : '🌙 Dark'}
            </button>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar;