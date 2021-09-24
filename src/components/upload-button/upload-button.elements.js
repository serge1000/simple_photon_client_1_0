import styled from 'styled-components';
import { FaFileUpload } from 'react-icons/fa';

export const FileUpload = styled.input`
  display: none;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const FileUploadLabel = styled.label`
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
    cursor: pointer;
  }



  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const UploadIcon= styled(FaFileUpload)`
  margin-right: 0.5rem;
  font-size: 1.6rem;
   `;