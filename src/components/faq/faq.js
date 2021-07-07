import React from 'react';
import Accordion from './Accordion.js';
import { faqData } from './faq_contents';
import Heading from "../Heading";

export default function FAQ(props) {
  return (
    <div className="Faq container">
      <Heading text="FAQ" />
      <div className="accordion">
        {faqData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};