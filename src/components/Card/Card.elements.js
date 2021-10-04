import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const OriginalLink = styled.a`
  text-decoration: underline;
  font-family: 'Source Sans Pro',sans-serif;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #4c5163;


  &:hover {
    color: #4c5163;
    transition: 0.3s ease-out;
    cursor: pointer; 
  }
`;