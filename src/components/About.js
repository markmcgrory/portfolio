import React from 'react';
import './About.css';
import faqData from '../data/FAQData';
import FAQList from './FAQList';

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-text'>
      <p>I am a career changer with almost twenty years of varied work experience behind me, but my <strong>curiosity</strong>, capacity for <strong>problem solving</strong>, and <strong>passion for learning</strong> drove me to pursue a new path in software development.</p>

      <p>I'm a recent graduate of CodeClan's Professional Software Development bootcamp in Glasgow - as it happens, I was in the last ever Glasgow cohort - where I learned to build <strong>full-stack</strong> applications using <strong>Python, JavaScript, Java, React</strong>, as well as a number of frameworks and database systems.</p>

      <p>All aspects of the process are enjoyable and interesting to me, but my passion is for producing <strong>accessible, visually appealing applications</strong> that fulfil a genuine need. My love of photography has honed my eye for good composition, and that's something I bring to the table, as well as my love of working in teams, my excellent communication skills, and my talent for breaking down difficult concepts.</p>
    
      <p>Having equipped myself with this solid groundwork of practical programming skills as well as a lived experied of the value of  <strong>TDD, Agile practices, pair programming</strong>, etc., I am now looking for an opportunity to apply these skills and continue my journey as a developer.</p>
      </div>
    </div>
  );
};

export default About;
