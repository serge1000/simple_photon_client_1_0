import { useRef, useState, useEffect } from "react";
import axios from "axios";
import OptionsRadioButton from "../options-radio-button/options-radio-button";
import CardsList from '../CardList/CardList';
import Popup from '../Popup/popup.component';
import DefaultImage from '../../images/undraw_search_orng.svg'
import WaitingImage from '../../images/waitingimage.svg';

import {
  InfoSec,
  InfoRow,
  InfoRow2,
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
  Form,
  FormInput,
  SearchButton,
  UploadButton,
  ImageDiv,
  Container,
  HeadingInfoRow2,
  Div1InfoRow2,
  PopupImg
} from "./FirstHomeSection.elements";

const api =  axios.create({
  baseURL: 'http://localhost:3001/'
  // baseURL: 'http://f1.sergei.info:3000/'
})

function FirstHomeSection({img,alt }) 
 {

  const content_rotation = [
    "no rotation",
    "multiples of 90 degrees",
    "arbitrary",
  ];
  const content_mirrored = ["no", "yes"];

  const [urlString, setUrlString] = useState("");
  const [serverResponse, setServerResponse] = useState(null);
  const [waitingImage, setWaitingImage] = useState(false);
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const [mirroredOption, setMirroredOption] = useState("no");
  const [rotationOption, setRotationOption] = useState("no rotation");
  const [isOpen, setIsOpen] = useState(false);
  const fileInputRef = useRef();
  
  const postSearch = (apiString,buffer,url,rotationOption,mirroredOption) => {
    let r = 0;
    let m = false;    
    switch(rotationOption) {
      case "no rotation":
         r = 0;
        break;
      case "multiples of 90 degrees":
         r = 1;
         break;
      case "arbitrary":
         r = 2;
         break;
      default:
         r = 0;
    }
    switch(mirroredOption) {
      case "no":
         m = false;
         break;
      case "yes":
         m = true;
         break;
      default:
         m = false;
    }
    api.post(apiString, {
      buffer: buffer,
      url: url,
      rotation: r,
      mirrored: m
    }).then(response => {
      (typeof response.data != "object") ? setServerResponse(null) : setServerResponse(response.data)
      })
      .finally(() => {setWaitingImage(false);});
  }

  useEffect(() => {
    if (image) {
      setServerResponse(null);
      const reader = new FileReader();
      reader.onloadend = () => {
        const buf = new Buffer.from(reader.result,'ascii');
        setPreview("data:image/png;base64," + Buffer.from(buf).toString('base64'));
        setWaitingImage(true);
        postSearch("/search/", reader.result,"none",rotationOption,mirroredOption);
      }; 
       reader.readAsBinaryString(image);
       
    } else {
      setPreview(null);
    }
  }, [image]); 

  const onClickSearchButton = () => {
    if (urlString) {
      setImage("");
      setServerResponse(null);
      const urlStringWithHttp  = (urlString.indexOf("http")>-1) ? urlString : 'http://'+urlString;
      setPreview(urlStringWithHttp);
      setWaitingImage(true);
      postSearch("/searchurl/", '',urlStringWithHttp,rotationOption,mirroredOption);
    }
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const handelChange = (e) => {
    setImage("");
    setPreview("");
    setUrlString(e.target.value);
    setServerResponse(null);
  };

  const onChangeRadioButton_R = (event) => {
    setRotationOption(event.target.value);

    if (image) {
      setServerResponse(null);
      const reader = new FileReader();
      reader.onloadend = () => {
        const buf = new Buffer.from(reader.result,'ascii');
        setPreview("data:image/png;base64," + Buffer.from(buf).toString('base64'));
        setWaitingImage(true);
        postSearch("/search/", reader.result,"none",event.target.value,mirroredOption);
      }; 
       reader.readAsBinaryString(image);
       
    } else if (urlString) {
      setServerResponse(null);
      const urlStringWithHttp  = (urlString.indexOf("http")>-1) ? urlString : 'http://'+urlString;
      setPreview(urlStringWithHttp);
      setWaitingImage(true);
      postSearch("/searchurl/", '',urlStringWithHttp,event.target.value,mirroredOption);
    } else {
      setPreview(null);
    }
  };
  const onChangeRadioButton_M = (event) => {
    setMirroredOption(event.target.value);

    if (image) {
      setServerResponse(null);
      const reader = new FileReader();
      reader.onloadend = () => {
        const buf = new Buffer.from(reader.result,'ascii');
        setPreview("data:image/png;base64," + Buffer.from(buf).toString('base64'));
        setWaitingImage(true);
        postSearch("/search/", reader.result,"none",rotationOption,event.target.value);
      }; 
       reader.readAsBinaryString(image);
       
    } else if (urlString) {
      setServerResponse(null);
      const urlStringWithHttp  = (urlString.indexOf("http")>-1) ? urlString : 'http://'+urlString;
      setPreview(urlStringWithHttp);
      setWaitingImage(true);
      postSearch("/searchurl/", '',urlStringWithHttp,rotationOption,event.target.value);
    } else {
      setPreview(null);
    }
  };


  return (
    <>
      <InfoSec >
        <Container>
          <InfoRow >
            <InfoColumn>
              <TextWrapper>
                <TopLine >Reverse Image Search</TopLine>
                <Heading > </Heading>
                <Subtitle >Upload an image or enter an image URL:</Subtitle>
                <InputContainer>
                  <UploadButton
                    big
                    fontBig
                      onClick={(event) => {
                      event.preventDefault();
                      fileInputRef.current.click();
                      setPreview("");
                      setUrlString("");
                      setServerResponse(null);

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
                      setImage("");
                      setWaitingImage(false);
                      const file = event.target.files[0];
                      if (file && file.type.substr(0, 5) === "image") {
                        setImage(file);
                      } else {
                        setImage("");
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
                <ImgWrapper >
                  {preview ? (
                    <Img
                      alt="preview"
                      src={preview}
                      cursor="default"

                    />
                  ) : ( <Img src={DefaultImage} cursor="default" alt='' />)
                  }


                </ImgWrapper>
              </ImageDiv>

            </InfoColumn>
          </InfoRow>

          {
            (waitingImage) ? (
                <InfoRow2>
                  <Div1InfoRow2>
                      <img src={WaitingImage} alt="Searching ..." />
                      <HeadingInfoRow2>Searching ...</HeadingInfoRow2>
                  </Div1InfoRow2>
                </InfoRow2>
            ) : (null)
          }
          {
            (serverResponse && serverResponse.results.length===0) ? (
                <InfoRow2>
                  <Div1InfoRow2>
                    <HeadingInfoRow2>The simular images NOT found.</HeadingInfoRow2>
                    <HeadingInfoRow2>Search time : {serverResponse.search_time} ms</HeadingInfoRow2>
                  </Div1InfoRow2>
                </InfoRow2>
            ) : (null)
          }

          {
            (serverResponse && serverResponse.results.length>0) ? (
                <>    
                <InfoRow2>
                  <Div1InfoRow2>
                    <HeadingInfoRow2>The simular images found.</HeadingInfoRow2>
                    <HeadingInfoRow2>Search time : {serverResponse.search_time} ms</HeadingInfoRow2>
                  </Div1InfoRow2>
                </InfoRow2>
                <InfoRow2>
                  <Div1InfoRow2>
                      <CardsList searchcards={serverResponse.results} cardnumber={serverResponse.results.length} />
                  </Div1InfoRow2>
                </InfoRow2>  
                </>
            ) : (null)
          }
        </Container>
       

      </InfoSec>

    </>
  );
}


/*
                      onClick={() => { setIsOpen(!isOpen);}}
{
  (isOpen && preview) ? (
  <Popup
    content={<>
      <PopupImg alt="preview" src={preview} />
    </>}
    handleClose={togglePopup}
  />
  ) : ('')

} */
export default FirstHomeSection;
