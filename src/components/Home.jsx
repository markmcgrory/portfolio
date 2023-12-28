import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './Home.css';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade'


const Home = () => {
  return ( 
    <div className='home-container'>
      <div className='home-text'>
        <Fade left>
        <p>Hi,</p>
        
        <p className='second-p'>
          I'm <span className='bold-name'>Mark McGrory</span>, a software developer based in <span className='shetland'>Shetland</span>.
        </p>
        <p className='third-p'>
          I am proficient in <strong>object-oriented programming</strong> and have experience building <strong>full-stack</strong> applications using <strong>JavaScript, Python, Java</strong> and more.
        </p>
        </Fade>
        <Fade right>
        <div className='social-icons'>
          <SocialIcon style={{ width: '53px', height: '53px' }} bgColor="black" fgColor="white" url="https://github.com/markmcgrory" target="_blank" rel="noopener noreferrer" />
          <SocialIcon style={{ width: '53px', height: '53px' }} url="https://www.linkedin.com/in/mark-mcgrory-463661277" target="_blank" rel="noopener noreferrer" />
          <SocialIcon style={{ width: '53px', height: '53px' }} url="mailto:mark_mcgrory@hotmail.co.uk" target="_blank" rel="noopener noreferrer"/>
        </div>
        </Fade>

        </div>
        <Fade right>
          <img
        src={process.env.PUBLIC_URL + '/images/home_image.jpeg'}
        alt="Me in snowy Tresta holding Fionn in a baby carrier"
        className="home-image"
          />
          </Fade>
        </div>
    
  );
}

export default Home;