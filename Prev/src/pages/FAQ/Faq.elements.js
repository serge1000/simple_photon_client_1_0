import styled from 'styled-components';

export const FaqMainDiv = styled.div`
  width: 50%;
  margin: auto;
  padding-top: 65px;
  padding-bottom: 80px;
`;

export const Heading = styled.h1`
   text-align: center;
   margin-top: 40px;
   margin-bottom: 40px;   
   padding-bottom: 25px;
   color: #33393d;
`;

export const FaqQuestion = styled.div`
    max-width: 500px;
    width: 100%;
    border-bottom: 1px solid #e8e8ea;
`;

//export const Heading1 = styled.`

//`;

export const FaqDescHide = styled.p`
    margin-left: -40px;
    padding-right: 17px;
    margin-top: 0;
    margin-bottom: 0;
    height: 0;
    overflow: hidden;
    transition: all 200ms ease-out;
`;
export const FaqDescShow = styled.p`
    margin-left: -40px;
    padding-right: 17px;
    margin-top: 0;
    overflow: hidden;
    transition: all 200ms ease-out;
    height: 2rem;
    margin-bottom: 15px;
`;

export const ButtonBold = styled.button`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border: none;
    background-color: transparent;
    padding: 0px;
    cursor: pointer;

    padding-top: 18px;
    padding-bottom: 18px;
    font-weight: 700;

    &::after {
      content: url(../images/icon-arrow-down.svg);
      margin-right: 17px;
      transform: rotate(90deg);
    }

    &:hover {
      color: $soft-red;
    }
`;

export const Button = styled.button`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border: none;
    background-color: transparent;
    padding: 0px;
    cursor: pointer;

    padding-top: 18px;
    padding-bottom: 18px;

    &::after {
      content: url(../images/icon-arrow-down.svg);
      margin-right: 17px;
      transform: rotate(90deg);
    }

    &:hover {
      color: $soft-red;
    }
`;
