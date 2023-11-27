import React from 'react';
import { useParams } from 'react-router-dom';
import Projects from '../data/ProjectData'; // Import your project data

const ProjectDetails = () => {
  const { id } = useParams(); // Get the project ID from the URL

  // Find the project with the matching ID
  const project = Projects.find((project) => project.id === parseInt(id));

  return (
    <div className="project-detail">
      <h2>{project.name}</h2>
      <img src={process.env.PUBLIC_URL + project.image} alt={project.name} />
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectDetails;
