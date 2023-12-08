import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar'; 
import './App.css';
import ProjectDetail from './components/ProjectDetail';

const App = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div>
        <NavBar scrollToSection={scrollToSection} /> 

        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <ProjectDetail/>
        </div>
      </div>
    </Router>
  );
};

export default App;
