import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ scrollToFooter }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">ShopEasy</div>
      <div className="navbar-hamburger" onClick={toggleMenu}>
        {/* Hamburger icon */}
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </div>
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#footer">About Us</a>
        </li>
        <li>
          <a href="/scanner">Barcode Scanner</a>
        </li>
        <li>
          <a
            onClick={(e) => {
              e.preventDefault();
              scrollToFooter();
            }}
            href="#footer"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
