import React from 'react';
import { useParams } from 'react-router-dom';
import Projects from '../data/ProjectData'; 
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ProjectDetail.css';

const ProjectDetails = () => {
  const { id } = useParams(); 
  const project = Projects.find((project) => project.id === parseInt(id));
  

  return (
    <div className='project-detail'>
      <div className="carousel-container">
        {project.images && project.images.length > 0 && ( 
          <Carousel showStatus={false} showArrows={true} >
            {project.images.map((image, index) => (
              <div key={index}>
                <img src={process.env.PUBLIC_URL + image} alt={`Project ${project.name} Image ${index}`} />
              </div>
            ))}
          </Carousel>
        )}
      </div>

      <div className="video-container">
        {project.video && ( 
          <video width="640" height="360" controls>
            <source src={process.env.PUBLIC_URL + project.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      <div className="project-info">
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <p>{project.techStack}</p>
        <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub Link</a>
        {/* Add other project information as needed */}
      </div>
    </div>
  );
};

export default ProjectDetails;
