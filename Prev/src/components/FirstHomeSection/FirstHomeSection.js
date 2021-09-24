import React from 'react';
import { Container, SearchButton, UploadButton } from '../../globalStyles';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  InputContainer,
  Img,
  UploadIcon,
  SearchIcon,
  SecLinks,
  Form,
  FormInput  
} from './FirstHomeSection.elements';

function FirstHomeSection({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart, 
  start
}) {

  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <InputContainer>
                    <SecLinks to='/sign-up'>
                        <UploadButton big fontBig primary={primary}>
                            <UploadIcon />
                            Upload
                        </UploadButton>
                    </SecLinks>
                    <Form>
                       <FormInput name='url' type='text' placeholder='Paste or enter image URL' />
                       <SearchButton>
                           <SearchIcon />
                        </SearchButton>
                    </Form>
       
                </InputContainer>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default FirstHomeSection;
