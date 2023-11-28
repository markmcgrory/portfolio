import React from 'react';
import './About.css';
import faqData from '../data/FAQData';
import FAQList from './FAQList';

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-text'>
        Here will be some text about me.
      </div>

      <div className='faq-section'>
        <FAQList faqData={faqData} />
      </div>
    </div>
  );
};

export default About;
