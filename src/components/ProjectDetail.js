import React from 'react';
import { useParams } from 'react-router-dom';
import Projects from '../data/ProjectData'; 
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'; // Import the CSS for image gallery
import './ProjectDetail.css';

const ProjectDetails = () => {
  const { id } = useParams(); 
  const project = Projects.find((project) => project.id === parseInt(id));

  // Prepare images array for react-image-gallery
  const images = project.images.map(image => ({
    original: process.env.PUBLIC_URL + image,
    thumbnail: process.env.PUBLIC_URL + image, // You can use the same image as thumbnail or provide a different URL

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
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <p>{project.techStack}</p>
      <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub Link</a>
      {/* Add other project information as needed */}
    </div>
  </div>
</div>

  );
};

export default ProjectDetails;
