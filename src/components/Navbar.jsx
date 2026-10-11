// Navbar.jsx
// This is a REACT COMPONENT — just a function that returns JSX
// Note: Component names MUST start with a capital letter

function Navbar() {
  return (
    // Outer <nav> — will be styled as fixed, blurred, top bar
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* LOGO — clicking goes to top (#home) */}
        <a href="#home" className="navbar-logo">
          Iman Zahra<span className="dot">.</span>
          {/* The <span> is for the colored dot at the end */}
        </a>

        {/* NAV LINKS — each jumps to a section by id */}
        <ul className="navbar-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar