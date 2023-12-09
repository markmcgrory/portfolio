import React from 'react';
import Projects from '../data/ProjectData'; 
import ImageGallery from 'react-image-gallery';
import { SocialIcon } from 'react-social-icons';
import 'react-image-gallery/styles/css/image-gallery.css';
import './ProjectDetail.css';

const ProjectDetail = () => {
  return (
    <div>
      {Projects.map((project) => (
        <div className='project-detail' key={project.id}>
          <div className="gallery-container">
            {project.images && project.images.length > 0 && (
              <ImageGallery items={project.images.map((image) => ({
                original: process.env.PUBLIC_URL + image,
                thumbnail: process.env.PUBLIC_URL + image,
              }))} showFullscreenButton={false} showPlayButton={false} showFullscreenButton={true} exitFullScreen={true}/>
            )}
          </div>
          <div className="content-container">
            <div className="project-info">
              <h2>{project.name}</h2>
              <p className='project-date'>{project.date}</p>
              <p className='project-tech-stack'>{project.techStack}</p>
              <p className='project-description'>{project.description}</p>
              <div className="project-icons">
                {project.github && (
                  <div>
                    <SocialIcon target="_blank" rel="noopener noreferrer" url={project.github} />
                  </div>
                )}
                {project.linkedin && (
                  <div>
                    <SocialIcon target="_blank" rel="noopener noreferrer" url={project.linkedin} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectDetail;
