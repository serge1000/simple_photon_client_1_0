import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  FooterSocialLink
} from './Footer.elements';

function Footer() {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
        The service uses reverse search technology and DejaVuAI® algorithms  provided by 1st1 Technologies, LLP.
        </FooterSubHeading>

        <WebsiteRights>1st1 Technologies © 2021</WebsiteRights>

      </FooterSubscription>

      <SocialMedia>

        <SocialMediaWrap>


          <SocialIcons>
            <SocialIconLink               href={
                '//www.facebook.com/1st1-Technologies-Deja-Vu-AI-111776947618029'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href={
                '//www.instagram.com/1st1.tech'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={
                '//www.youtube.com/channel/UCFCH9klYmogY1J0np2DU1yA'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink               href={
                '//twitter.com/1st1T'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href={
                '//www.linkedin.com/company/72056094/'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
