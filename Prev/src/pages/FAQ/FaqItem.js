import React from "react";

import {
    FaqQuestion,
    FaqDescShow,
    FaqDescHide,
    ButtonBold,
    Button
} from './Faq.elements';

const FaqItem = ({
  showDescription,
  ariaExpanded,
  fontWeightBold,
  item,
  index,
  onClick,
}) => (
  <FaqQuestion  key={item.question}>
    <dt>
     {fontWeightBold ? 
        <ButtonBold
            aria-expanded={ariaExpanded}
            aria-controls={`faq${index + 1}_desc`}
            data-qa="faq__question-button"
            onClick={onClick}>
                {item.question}
        </ButtonBold>
      : 
        <Button
            aria-expanded={ariaExpanded}
            aria-controls={`faq${index + 1}_desc`}
            data-qa="faq__question-button"
            onClick={onClick}>
                {item.question}
         </Button>      
      }

    </dt>
    <dd>
        {showDescription ? <FaqDescShow>{item.answer}</FaqDescShow> : <FaqDescHide>{item.answer}</FaqDescHide>}
    </dd>
  </FaqQuestion>
);

export default FaqItem;