import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './Home.css';

const Home = () => {
  return ( 
    <div className='home-container'>
      {/* <img
        src={process.env.PUBLIC_URL + '/images/homepage.png'}
        alt="Me in snowy Tresta holding Fionn in a baby carrier"
        className="home-image"
      /> */}
      <div className='home-text'>
        <p>
          Hi, I'm <span className='bold-name'>Mark McGrory</span>, a software developer based in Shetland. 
        </p>
        <div className='social-icons'>
          <SocialIcon style={{ width: '53px', height: '53px' }} bgColor="black" fgColor="white" url="https://github.com/markmcgrory" target="_blank" rel="noopener noreferrer" />
          <SocialIcon style={{ width: '53px', height: '53px' }} url="https://www.linkedin.com/in/mark-mcgrory-463661277" target="_blank" rel="noopener noreferrer" />
          <SocialIcon style={{ width: '53px', height: '53px' }} url="mailto:mark_mcgrory@hotmail.co.uk" target="_blank" rel="noopener noreferrer"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
