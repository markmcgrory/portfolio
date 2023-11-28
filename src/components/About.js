import './About.css'
import faqData from '../data/FAQData';
import FAQList from './FAQList'

const About = () => {
    return (
        <div className='about-text'>
            Here will be some text about me.
        <FAQList faqData={faqData}/>
        </div>

    );
}
 
export default About;