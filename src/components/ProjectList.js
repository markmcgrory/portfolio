import React from 'react';
import Projects from '../data/ProjectData';
import './ProjectList.css'; // Import CSS file for styling

const ProjectList = () => {
  return (
    <div className="projects-container">
      {Projects.map((project) => (
        <div key={project.id} className="project-card">
          <img src={process.env.PUBLIC_URL + project.image} alt={project.name} />
          <div className="project-info">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
