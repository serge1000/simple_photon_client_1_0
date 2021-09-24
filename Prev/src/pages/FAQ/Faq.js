import React, { useState } from "react";
import FaqItem from "./FaqItem";
import {questionsAnswers} from './Data';

import {
    FaqMainDiv,
    Heading
  } from './Faq.elements';
  
const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const renderedQuestionsAnswers = questionsAnswers.map((item, index) => {
    const showDescription = index === activeIndex ? "show-description" : "";
    const fontWeightBold = index === activeIndex ? "font-weight-bold" : "";
    const ariaExpanded = index === activeIndex ? "true" : "false";
    return (
      <FaqItem
        showDescription={showDescription}
        fontWeightBold={fontWeightBold}
        ariaExpanded={ariaExpanded}
        item={item}
        index={index}
        onClick={() => {
          setActiveIndex(index);
        }}
      />
    );
  });

  return (
    <FaqMainDiv>
      <Heading >Frequently Asked Questions</Heading>
      <dl className="faq__list">{renderedQuestionsAnswers}</dl>
    </FaqMainDiv>
  );
};

export default Faq;