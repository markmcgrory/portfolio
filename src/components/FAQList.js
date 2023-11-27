import faqData from "../data/faqData";
import FAQItem from "./FAQItem";


const FAQList = () => {
    return (
      <div className="faq-section">
        {faqData.map((faq) => (
          <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    );
  };
  
  export default FAQList;