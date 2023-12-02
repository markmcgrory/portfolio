import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './Home.css';

const Home = () => {
  return ( 
    <div className='home-container'>
      <div className='home-text'>
        <p>
          I'm <span className='bold-name'>Mark McGrory</span>, a software developer based in Shetland. Welcome to my portfolio.
        </p>
      </div>
      <div className='social-icons'>
        <SocialIcon style={{ width: '53px', height: '53px' }}bgColor="black" fgColor="white" url="https://github.com/markmcgrory" target="_blank" rel="noopener noreferrer" />
        <SocialIcon style={{ width: '53px', height: '53px' }}url="https://www.linkedin.com/in/mark-mcgrory-463661277" target="_blank" rel="noopener noreferrer" />
      </div>
    </div>
  );
}

export default Home;
