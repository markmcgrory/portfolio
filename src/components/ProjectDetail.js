import React from 'react';
import { useParams } from 'react-router-dom';
import Projects from '../data/ProjectData';
import ImageGallery from 'react-image-gallery';
import { SocialIcon } from 'react-social-icons';
import 'react-image-gallery/styles/css/image-gallery.css';
import './ProjectDetail.css';
import { FaVideo } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = Projects.find((project) => project.id === parseInt(id));
  const images = project.images.map((image) => ({
    original: process.env.PUBLIC_URL + image,
    thumbnail: process.env.PUBLIC_URL + image,
  }));

  return (
    <div className='project-detail'>
      <div className="gallery-container">
        {project.images && project.images.length > 0 && (
          <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} />
        )}
      </div>

      <div className="content-container">
        <div className="project-info">
          <span className='project-name'>{project.name}</span>
          <p className='project-tech-stack'>{project.techStack}</p>
          <p className='project-description'>{project.description}</p>

          {/* GitHub and LinkedIn Icons */}
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
  );
};

export default ProjectDetails;

