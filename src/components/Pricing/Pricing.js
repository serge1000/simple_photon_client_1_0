import React from 'react';
import { Button } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';
//e5ffe3 ededed feffd6
function Pricing({cardColor}) {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Plans</PricingHeading>
          <PricingContainer>
            <PricingCard cardColor='#fff' to='/sign-up'>
              <PricingCardInfo>
                <PricingCardPlan>Free</PricingCardPlan>
                <PricingCardCost>$0.00</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>10 searches a month</PricingCardFeature>
                  <PricingCardFeature>all options included</PricingCardFeature>
                  <PricingCardFeature>no automatic tracking available</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard cardColor='#fff'  to='/sign-up'>
              <PricingCardInfo>
                <PricingCardPlan>Silver</PricingCardPlan>
                <PricingCardCost>$49.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>1000 searches a month</PricingCardFeature>
                  <PricingCardFeature>one options included </PricingCardFeature>
                  <PricingCardFeature>no automatic tracking available</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard cardColor='#fff' to='/sign-up'>
              <PricingCardInfo>
                <PricingCardPlan>Gold</PricingCardPlan>
                <PricingCardCost>$99.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>6000 searches a month</PricingCardFeature>
                  <PricingCardFeature>all options included</PricingCardFeature>
                  <PricingCardFeature>automatic tracking available</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
