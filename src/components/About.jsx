
import React from 'react';
import './About.css';
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <div id='about' className='about-container'>
      <div className='about-text'>
        <Fade left>
          <p className='about-me'>About me</p>
        </Fade>
        <Fade  left>
          <div className='about-box'>
            <p className='about-one'>
              I am a career changer with almost twenty years of varied work experience behind me, but my <strong>curiosity</strong>, capacity for <strong>problem solving</strong>, and <strong>love of learning</strong> drove me to pursue a new path in software development.
            </p>
          </div>
        </Fade>
        <Fade right>
          <div className='about-box'>
            <p className='about-two'>
              I'm a recent graduate (November 2023) of CodeClan's Professional Software Development bootcamp in Glasgow, where I learned to build <strong>full-stack</strong> applications using <strong>Python, JavaScript, Java & React</strong>, as well as using database systems such as PostgreSQL and MongoDB, and other technologies.
            </p>
          </div>
        </Fade>
        <Fade left>
          <div className='about-box'>
            <p className='about-three'>
              All aspects of the process are enjoyable to me, but I'm particularly interested in producing <strong>accessible, visually striking applications</strong> that fulfill a genuine need. My experience in photography has honed my eye for composition, and that's something I bring to the table, as well as my love of working collaboratively and my excellent <strong>communication skills</strong>.
            </p>
          </div>
          </Fade>
          <Fade right>
          <div className='about-box'>
          <p className='about-four'>
            I am now looking for an opportunity to apply these skills commercially and to continue my journey as a developer.
          </p>
          </div>
          </Fade>
        
        
      </div>
    </div>
  );
};

export default About;
