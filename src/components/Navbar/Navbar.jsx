import { useEffect, useState } from "react";
import "./Navbar.css";
 
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
 
const toggleMenu = () => {
  setMenuOpen(!menuOpen);
};
 
 
  // Theme state
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );
 
  // Apply theme whenever it changes
  useEffect(() => {
 
    document.body.dataset.theme = theme;
 
    localStorage.setItem(
      "theme",
      theme
    );
 
  }, [theme]);
 
 
  // Toggle dark/light mode
  const toggleTheme = () => {
 
    const newTheme =
      theme === "light"
        ? "dark"
        : "light";
 
    setTheme(newTheme);
  };
 
 
  return (
    <header className="site-header">
 
      <nav className="navbar">
 
        {/* Logo */}
        <div className="logo">
          AP
        </div>
 
 
        {/* Navigation links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
 
 
          <li>
            <a href="#about">
              About
            </a>
          </li>
 
          <li>
            <a href="#skills">
              Skills
            </a>
          </li>
 
          <li>
            <a href="#projects">
              Projects
            </a>
          </li>
 
          <li>
            <a href="#contact">
              Contact
            </a>
          </li>
 
        </ul>
 
 
        {/* Theme button */}
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
 
 
        {/* Mobile menu */}
        <button
  className="menu-toggle"
  onClick={toggleMenu}
  aria-label="Toggle navigation"
>
  {menuOpen ? "✕" : "☰"}
</button>
 
      </nav>
 
    </header>
  );
}
 
export default Navbar;
 