import styled from 'styled-components';
import { FaFileUpload, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Form = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 20px;

  }
`;

export const FormInput = styled.input`
  padding: 12px 20px;
  width: 300px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  margin-right: 0px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;
  &::placeholder {
    color: #859194;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
export const SecLinks = styled(Link)`
  text-decoration: none;
  

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const FileUpload = styled(styled.input)`
  display: none;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;



export const UploadIcon= styled(FaFileUpload)`
  margin-right: 0.5rem;
  font-size: 1.6rem;
   `;

export const SearchIcon= styled(FaSearch)`
  margin-right: 0.5rem;
  font-size: 1.6rem;
  padding-left: 5px;
`;

export const InputContainer = styled.div`
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 540px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    max-width: 100%; 
    padding-right: 0px;   
    padding-left: 0px;   
  }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;


  padding-bottom: 8rem;    /* Footer height */


  @media screen and (max-width: 768px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;
//height: 460px;

export const InfoSec = styled.div`
  color: #fff;
  padding: 40px 0;
  background: #7ba0aa;

  position: relative;
  min-height: calc(100vh - 70px);;


  @media screen and (max-width: 768px) {
  color: #fff;
  padding: 60px 0;
  background: #7ba0aa;

  }

`;
//  height: 900px;
export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
`;

export const InfoRow2 = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;

  justify-content: center;
  background: #7ba0aa;
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 0px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const ImageDiv = styled.div`
  display: flex;
  align-items: center;
  width: 457px;
  height: 360px;
  justify-content: center;
  padding: 0;
  margin: 0px;
  background-color: #7ba0aa;
  cursor: default;

  @media screen and (max-width: 768px) {

  }
`;


export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;

`;


export const PopupImg = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 100%;
  cursor: default;

`;
export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 360px;
  cursor: ${({ cursor }) => (cursor)};

`;

export const TopLine = styled.div`
  color: #4c5163;
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Div1InfoRow2 = styled.div`
color: #4c5163;
margin: 50px, 0px;
text-align:center;
background: #7ba0aa;
`;


export const HeadingInfoRow2 = styled.h1`
font-size: 18px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
margin: 20px 5px;
background: #7ba0aa;

`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #33393d;
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 1.1px;
  color: #4c5163;
`;

export const SearchButton = styled.button`
  display: flex;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background: #1F85DE;
  padding: 11px 10px;
  color: #fff;
  font-size: 20px;
  outline: none;
  cursor: pointer;
  width: 50px;
  align-items:center ;
  border: none;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: #0467FB;
  }

  @media screen and (max-width: 960px) {
    width: 50px;
  }
`;

export const UploadButton = styled.button`
  display: flex;
  border-radius: 4px;
  background: #1F85DE;
  padding: 11px 25px;
  color: #fff;
  font-size: 20px;
  outline: none;
  cursor: pointer;
  align-items:center ;
  justify-content: center;
  border: none;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: #0467FB;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
