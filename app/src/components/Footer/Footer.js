import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Universidade Federal do Rio de Janeiro - It's free for use</p>
    </footer>
  );
};

export default Footer;
