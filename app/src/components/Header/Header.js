// src/Header.js
import React from 'react';
import svgLogo from '../../logo.svg'
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className='content-logo'>
        <div className="logo">
          <img src={svgLogo} alt="Logo" />
        </div>
        <h1>TotemMaps</h1>
      </div>
      
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
