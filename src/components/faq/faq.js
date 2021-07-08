import React from "react";
import Accordion from "./Accordion.js";
// import { faqData } from "./faq_contents";
import faqData from "../../assets/json/FAQs.json";
import Heading from "../Heading";

export default function FAQ(props) {
  return (
    <div className="faqs-container container">
      <Heading text="FAQs" />
      <div className="faqs">

        {/* {faqData.map(({ title, content }) => (
          <Accordion key={title} title={title} content={content} />
        ))}  */}

        {/* { 
          faqData.slice(0, Math.floor(faqData.length / 2)).map(({ data, key }) => (
            <Accordion key={key} title={data.title} content={data.content} />
          ))
        }  */}

        <div className="accordion accordion-flush faq-col col-12 col-md-5 mx-auto" id="faqAccordion1">
          {
            faqData.slice(0, Math.ceil(faqData.length / 2)).map((data, index) => {
              return (
                <Accordion
                  key={"faq" + index} 
                  no={"faq" + index} 
                  title={data.title} 
                  content={data.content} 
                  parent="faqAccordion1"
                />
              );
            })
          }
        </div>

        <div className="accordion accordion-flush faq-col col-12 col-md-5 mx-auto" id="faqAccordion2">
          {
            faqData.slice(Math.ceil(faqData.length / 2)).map((data, index) => {
              return (
                <Accordion
                  key={"faq" + (index + Math.ceil(faqData.length / 2))} 
                  no={"faq" + (index + Math.ceil(faqData.length / 2))} 
                  title={data.title} 
                  content={data.content}
                  parent="faqAccordion2"
                />
              );
            })
          }
        </div>

      </div>
    </div>
  );
}