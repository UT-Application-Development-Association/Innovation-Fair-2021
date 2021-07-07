import React from "react";
import Accordion from "./Accordion.js";
// import { faqData } from "./faq_contents";
import faqData from "../../assets/json/FAQs.json";
import Heading from "../Heading";

export default function FAQ(props) {
  return (
    <div className="Faq container">
      <Heading text="FAQs" />
      <div className="accordion">
        {faqData.map(({ title, content }) => (
          <Accordion key={title} title={title} content={content} />
        ))} 
      </div>
    </div>
  );
}