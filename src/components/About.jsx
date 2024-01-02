
import React from 'react';
import './About.css';
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <div id='about' className='about-container'>
      <div className='about-text'>
          <p className='about-me'>About me</p>
        <Fade  left>
          <div className='about-box'>
            <p className='about-one'>
              <strong>Recent bootcamp graduate: </strong>Professional Software Development, <strong>CodeClan / CodeBase</strong>, Glasgow, July - November 2023.
            </p>
          </div>
        </Fade>
        <Fade right>
          <div className='about-box'>
            <p className='about-two'>
              Proficient in <strong>Python, Java</strong> and <strong>JavaScript</strong>, as well as <strong>React</strong> and <strong>Node.js</strong>, although always happy to learn new languages and tools. Strong eye for <strong>design and composition.</strong>
            </p>
          </div>
        </Fade>
        <Fade left>
          <div className='about-box'>
            <p className='about-three'>
              Have built full-stack applications with <strong>SQL</strong> and <strong>NoSQL </strong>(MongoDB) databases.
            </p>
          </div>
        </Fade>
        <Fade right>
          <div className='about-box'>
            <p className='about-four'>
              Career changer with almost <strong>twenty years of work experience</strong> in various industies, including theatre, libraries and hospitality. 
            </p>
          </div>
        </Fade>
        <Fade left>
          <div className='about-box'>
            <p className='about-four'>
             Excellent communicator and team-player with experience working in <strong>Agile</strong> environments.
            </p>
          </div>
        </Fade>
        <Fade right>
          <div className='about-box'>
            <p className='about-five'>
             Problem solver and lover of learning who sees coding as a craft. Drawn to software development as a field where learning never stops.
            </p>
          </div>
          </Fade>
          <Fade left>
          <div className='about-box'>
          <p className='about-six'>
            Eager to demonstrate my knowledge and skills in a commercial environment, and to continue learning and growing in this field.
          </p>
          </div>
          </Fade>
        
        
      </div>
    </div>
  );
};

export default About;
