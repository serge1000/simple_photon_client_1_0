// import React from 'react';
import { useRef, useState, useEffect } from "react";
import { Redirect } from 'react-router-dom';
import { Container } from "../../globalStyles";
import OptionsRadioButton from "../options-radio-button/options-radio-button";
// import UploadButtonComponent from "../upload-button/upload-button";
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
  FormInput,
  SearchButton,
  UploadButton,
  ImageDiv
} from "./FirstHomeSection.elements";

function FirstHomeSection({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  description1,
  buttonLabel,
  img,
  alt,
  imgStart,
  start,
}) {
  const [urlSting, setUrlString] = useState("");
  const [image, setImage] = useState();
  const [preview, setPreview] = useState('');
  const [mirroredOption, setMirroredOption] = useState("no");
  const [rotationOption, setRotationOption] = useState("no rotation");
  const fileInputRef = useRef();



  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  const content_rotation = [
    "no rotation",
    "multiples of 90 degrees",
    "arbitrary",
  ];
  const content_mirrored = ["no", "yes"];

  const handelChange = (e) => {
    setUrlString(e.target.value);
  };

  const onClickSearchButton = () => {
    if (urlSting) {
      setPreview(urlSting);
    }
  };

  const onChangeRadioButton_R = (event) => {
    setRotationOption(event.target.value)
   }
   const onChangeRadioButton_M = (event) => {
    setMirroredOption(event.target.value)
   }

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

                    <UploadButton
                      big
                      fontBig
                      primary={primary}
                      onClick={(event) => {
                        event.preventDefault();
                        fileInputRef.current.click();
                      }}
                    >
                      <UploadIcon />
                      Upload
                    </UploadButton>


                  <input
                    type="file"
                    style={{ display: "none" }}
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={(event) => {
                      const file = event.target.files[0];
                      if (file && file.type.substr(0, 5) === "image") {
                        setImage(file);
                      } else {
                        setImage(null);
                      }
                    }}
                  />

                  <Form>
                    <FormInput
                      name="url"
                      type="text"
                      placeholder="Paste or enter image URL"
                      onChange={handelChange}
                    />
                    <SearchButton onClick={onClickSearchButton}>
                      <SearchIcon />
                    </SearchButton>
                  </Form>
                </InputContainer>

                <OptionsRadioButton
                  title="Rotation :"
                  content={content_rotation}
                  onChangeRadioButton={onChangeRadioButton_R}
                  current={rotationOption}
                />
                <OptionsRadioButton
                  title="Mirrored :"
                  content={content_mirrored}
                  onChangeRadioButton={onChangeRadioButton_M}
                  current={mirroredOption}                  
                />
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
            <ImageDiv>
              <ImgWrapper start={start}>
                {preview ? (
                  <Img
                    alt="preview"
                    src={preview}
                    onClick={() => {
                      setImage(null);
                    }}
                  />
                ) : (
                  <Img src={img} alt={alt} />
                )}
              </ImgWrapper>
              </ImageDiv>
              <p>mirroredOption: {mirroredOption}</p>
              <p>rotationOption: {rotationOption}</p>              
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default FirstHomeSection;
