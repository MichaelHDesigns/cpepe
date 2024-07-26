import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-top">
        <h3>UCIT.SHOP</h3>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <nav className="footer-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#whitepaper">Whitepaper</a>
          <a href="#roadmap">Roadmap</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024 ucit.shop | Powered by ucit.shop</p>
      </div>
    </div>
  </footer>
);

export default Footer;