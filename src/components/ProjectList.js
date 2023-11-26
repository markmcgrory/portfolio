import React from 'react';
import Projects from '../data/ProjectData';

const ProjectList = () => {
  return (
    <div className="projects-container">
      {Projects.map((project) => (
        <div key={project.id} className="project-card">
          <h2>{project.name}</h2>
          <img src={process.env.PUBLIC_URL + project.image} alt={project.name} />
          <p>{project.description}</p>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
