import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import start from "../../assets/start.svg";
import hamburger from "../../assets/hamburger.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className="nav-header">
      <div className="navbar">
        {/* Logo */}
        <Link to="/" className="logo-container">
          <img src={start} alt="Logo" className="logo" />
        </Link>

        {/* Hamburger Icon */}
        <img
          src={hamburger}
          alt="Menu"
          className="menu-icon"
          onClick={toggleMenu}
        />
      </div>

      {/* Navigation Menu */}
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link>
          </li>
          {/* <li>
            <Link to="/services" onClick={() => setMenuOpen(false)}>Our Services</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </li> */}
        </ul>
      </nav>
    </section>
  );
}

export default Navbar;
