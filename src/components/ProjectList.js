import React from 'react';
import { Link } from 'react-router-dom';
import Projects from '../data/ProjectData';
import './ProjectList.css'; // Import CSS file for styling

const ProjectList = () => {
  return (
    <div className="projects-container">
      {Projects.map((project) => (
        <Link to={`/projects/${project.id}`} key={project.id} className="project-link">
          <div className="project-card">
            <img src={process.env.PUBLIC_URL + project.image} alt={project.name} />
            </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectList;
