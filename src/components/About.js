import './About.css'
import FAQData from '../data/faqData';
import FAQList from './FAQList'

const About = () => {
    return (
        <FAQList FAQData={FAQData}/>
    );
}
 
export default About;