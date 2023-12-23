import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './Home.css';

const Home = () => {
  return ( 
    <div className='home-container'>
      <div className='home-text'>
        <p>Hi.</p>
        <p className='second-p'>
          I'm <span className='bold-name'>Mark McGrory</span>, a software developer based in <span className='shetland'>Shetland</span>.
        </p>
        <p className='third-p'>
          Something something yes that's something else hi my name's Mark
        </p>
        <div className='social-icons'>
          <SocialIcon style={{ width: '53px', height: '53px' }} bgColor="black" fgColor="white" url="https://github.com/markmcgrory" target="_blank" rel="noopener noreferrer" />
          <SocialIcon style={{ width: '53px', height: '53px' }} url="https://www.linkedin.com/in/mark-mcgrory-463661277" target="_blank" rel="noopener noreferrer" />
          <SocialIcon style={{ width: '53px', height: '53px' }} url="mailto:mark_mcgrory@hotmail.co.uk" target="_blank" rel="noopener noreferrer"/>
        </div>
      </div>
      <img
        src={process.env.PUBLIC_URL + '/images/home_image.jpeg'}
        alt="Me in snowy Tresta holding Fionn in a baby carrier"
        className="home-image"
      />
    </div>
  );
}

export default Home;
