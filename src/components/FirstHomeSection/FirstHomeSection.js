import { useRef, useState, useEffect } from "react";
import axios from "axios";
import OptionsRadioButton from "../options-radio-button/options-radio-button";
import CardsList from '../CardList/CardList';
import Popup from '../Popup/popup.component';
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

function FirstHomeSection
  ({
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
    start
  }) 
 {
  const [urlString, setUrlString] = useState("");
  const [serverResponse, setServerResponse] = useState(null);
  const [searchingImage, setSearchingImage] = useState(false);
  const [image, setImage] = useState();
  const [preview, setPreview] = useState("");
  const [mirroredOption, setMirroredOption] = useState("no");
  const [rotationOption, setRotationOption] = useState("no rotation");
  const [isOpen, setIsOpen] = useState(false);
  const fileInputRef = useRef();
  
  useEffect(() => {
    if (image) {
      setServerResponse(null);
      const reader = new FileReader();
      reader.onloadend = () => {
        const buf = new Buffer.from(reader.result,'ascii');
        setPreview("data:image/png;base64," + Buffer.from(buf).toString('base64'));
        setSearchingImage(true);
        api.post(`/search/`,{
          buffer: reader.result,
          url: "none"
        }).then(response => {
          console.log("After post:");
          console.log(typeof response);
          console.log(response);
          (typeof response.data != "object") ? setServerResponse(null) : setServerResponse(response.data)
          })
          .finally(() => {setSearchingImage(false);});
      }; 
       reader.readAsBinaryString(image)
       
    } else {
      setPreview(null);
    }
  }, [image]); 

   
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
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
    if (urlString) {
      const urlStringWithHttp  = (urlString.indexOf("http")>-1) ? urlString : 'http://'+urlString;
      setPreview(urlStringWithHttp);
      setSearchingImage(true);
      api.post(`/search/`,{
        buffer: '',
        url: urlStringWithHttp
      }).then(response => {
        console.log("After post URL:");
        console.log(response);
        console.log(typeof response);
        (typeof response.data != "object") ? setServerResponse(null) : setServerResponse(response.data)
        console.log("in URL then")
      })
        .finally(() => {setSearchingImage(false); console.log("in URL finally");});
    }
  };

  const onChangeRadioButton_R = (event) => {
    setRotationOption(event.target.value);
  };
  const onChangeRadioButton_M = (event) => {
    setMirroredOption(event.target.value);
  };


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
                      cursor="pointer"
                      onClick={() => { setIsOpen(!isOpen);}}
                    />
                  ) : ( <Img src={img} cursor="default" alt={alt} />)
                  }

                  {
                    (isOpen && preview) ? (
                    <Popup
                      content={<>
                        <PopupImg alt="preview" src={preview} />
                      </>}
                      handleClose={togglePopup}
                    />
                    ) : ('')

                  }
                </ImgWrapper>
              </ImageDiv>

            </InfoColumn>
          </InfoRow>

          {
            (searchingImage) ? (
                <InfoRow2>
                  <Div1InfoRow2>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="" />
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
                      <CardsList searchcards={serverResponse.results} CardClick='' cardnumber={serverResponse.results.length} />
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

export default FirstHomeSection;
