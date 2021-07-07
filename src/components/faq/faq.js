import React from 'react';
import Accordion from './Accordion.js';
import { faqData } from './faq_contents';

export default function FAQ(props) {
  return (
    <div className="Faq">
      <h1>FAQ</h1>
      <div className="accordion">
        {faqData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};