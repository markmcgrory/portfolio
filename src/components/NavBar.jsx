import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ scrollToSection }) => {
  return (
    <nav className="navbar">
      <div className="nav-links"> 
        <ul>
          <li>
            <Link to="home" onClick={() => scrollToSection('home')}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" onClick={() => scrollToSection('about')}>
              About
            </Link>
          </li>
          <li>
            <Link to="projects" onClick={() => scrollToSection('projects')}>
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
