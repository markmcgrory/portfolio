import React from 'react';
import './About.css';
import Fade from 'react-reveal/Fade'

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-text'>
        <Fade bottom>
        <p className='about-me'>About me</p>
        <p>I am a career changer with almost twenty years of varied work experience behind me, but my <strong>curiosity</strong>, capacity for <strong>problem solving</strong>, and <strong>love of learning</strong> drove me to pursue a new path in software development.</p>

        <p>I'm a recent graduate (November 2023) of CodeClan's Professional Software Development bootcamp in Glasgow, where I learned to build <strong>full-stack</strong> applications using <strong>Python, JavaScript, Java & React</strong>, as well as using database systems such as PostgreSQL and MongoDB, and other technologies.</p>

        <p>All aspects of the process are enjoyable to me, but I'm particularly interested in producing <strong>accessible, visually striking applications</strong> that fulfill a genuine need. My experience in photography has honed my eye for composition, and that's something I bring to the table, as well as my love of working collaboratively and my excellent <strong>communication skills</strong></p>

        <p>I am now looking for an opportunity to apply these skills commercially and to continue my journey as a developer.</p>
        </Fade>
      </div>
      {/* <img
        src={process.env.PUBLIC_URL + '/images/portfolio.png'}
        alt="Me in snowy Tresta holding Fionn in a baby carrier"
        className="profile-image"
      /> */}
    </div>
  );
};

export default About;
