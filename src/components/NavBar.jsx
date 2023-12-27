import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Fade from 'react-reveal/Fade'


const NavBar = ({ scrollToSection }) => {
  return (
    <nav className="navbar">
       <div className="nav-links"> 
        <Fade left>
        <ul>
          <li>
            <Link to="home" onClick={() => scrollToSection('home')}>
              home
            </Link>
          </li>
          <li>
            <Link to="projects" onClick={() => scrollToSection('projects')}>
              projects
            </Link>
          </li>
          <li>
            <Link to="about" onClick={() => scrollToSection('about')}>
              about
            </Link>
          </li>
        </ul>
        </Fade>
      </div>
    </nav>
  );
};

export default NavBar;
