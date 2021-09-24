import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
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

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
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
    background-color: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  text-decoration: none;
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#1F85DE' : '#1F85DE')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  cursor: pointer;
  align-items:center ;
  border: none;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;
//  background: ${({ primary }) => (primary ? '#4B59F7' : '#0467FB')};