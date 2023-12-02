import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './Home.css';

const Home = () => {
  return ( 
    <div className='home-container'>
      <div className='home-text'>
        <p>
          I'm <span className='bold-name'>Mark McGrory</span>, a software developer based in Shetland. Welcome to my portfolio site.
        </p>
      </div>
      <div className='social-icons'>
        <SocialIcon bgColor="black" fgColor="white" url="https://github.com/markmcgrory" target="_blank" rel="noopener noreferrer" />
        <SocialIcon style={{ width: '70px', height: '70px' }}bgColor="white" fgColor="black"url="https://www.linkedin.com/in/mark-mcgrory-463661277" target="_blank" rel="noopener noreferrer" />
      </div>
    </div>
  );
}

export default Home;
