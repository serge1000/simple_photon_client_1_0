import styled from 'styled-components';
import { FaFileUpload, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;

  @media screen and (max-width: 820px) {
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
  @media screen and (max-width: 820px) {
    width: 100%;
  }
`;
export const SecLinks = styled(Link)`
  text-decoration: none;
  

  @media screen and (max-width: 820px) {
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


  @media screen and (max-width: 768px) {
    max-width: 100%; 
    padding-right: 0px;   
    padding-left: 0px;   
  }
`;

export const InfoSec = styled.div`
  color: #fff;
  padding: 160px 0;
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#7ba0aa')};
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
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

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? '#4c5163' : '#4B59F7')};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 360px;
  cursor: none;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#33393d' : '#1c2237')};
`;
//color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 1.1px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#4c5163' : '#1c2237')};
`;
