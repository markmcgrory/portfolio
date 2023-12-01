import React from 'react';
import { useParams } from 'react-router-dom';
import Projects from '../data/ProjectData'; 
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'; // Import the CSS for image gallery
import './ProjectDetail.css';

const ProjectDetails = () => {
  const { id } = useParams(); 
  const project = Projects.find((project) => project.id === parseInt(id));
  const images = project.images.map(image => ({
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
    <div className="video-container">
      {project.video && ( 
        <video width="640" height="360" controls>
          <source src={process.env.PUBLIC_URL + project.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>

    <div className="project-info">
      <span className='project-name'>{project.name}</span>
      <p>{project.techStack}</p>
      <p>{project.description}</p>
    </div>
  </div>
</div>

  );
};

export default ProjectDetails;
