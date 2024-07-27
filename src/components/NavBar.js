import React from 'react';
import { Link } from 'react-scroll';
import './NavBar.css';

const NavBar = () => (
  <nav className="navbar">
    <ul className="nav-links">
      <li className="nav-item">
        <Link to="home" smooth={true} duration={500}>Home</Link>
      </li>
      <li className="nav-item">
        <Link to="about" smooth={true} duration={500}>About</Link>
      </li>
      <li className="nav-item">
        <Link to="what" smooth={true} duration={500}>What To Do</Link>
      </li>
      <li className="nav-item">
        <Link to="cpepeSection" smooth={true} duration={500}>Chef Pepe Token</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;