import React from 'react';
import { useParams } from 'react-router-dom';
import Projects from '../data/ProjectData'; 
import './ProjectDetail.css';

const ProjectDetails = () => {
  const { id } = useParams(); 
  const project = Projects.find((project) => project.id === parseInt(id));

  return (
    <div className='project-detail'>
      {project.video && ( 
        <div className="project-video">
          <video width="640" height="360" controls>
            <source src={process.env.PUBLIC_URL + project.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      <div className="project-info">
        <h2>{project.name}</h2>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
