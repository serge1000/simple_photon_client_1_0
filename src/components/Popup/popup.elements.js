import styled from 'styled-components';


export const Form = styled.div`

  @media screen and (max-width: 820px) {

  }
`;

export const PopupBox = styled.div`
  position: fixed;
  background: #00000050;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  cursor:  default;

  @media screen and (max-width: 820px) {

  }
`;
//margin-top: calc(100vh - 85vh - 20px);
export const Box = styled.div`
  position: relative;
  width: 120vh;
  margin: 0 auto;
  height: auto;
  max-height: 120vh;
  margin-top: calc(100vh - 85vh - 20px);
  background: #fff;
  border-radius: 4px;
  padding: 2px;
  border: 1px solid #999;
  overflow: auto;
  cursor:  default;

  @media screen and (max-width: 820px) {
    width: 40vh;
    max-height: 40vh;
  }
`;

export const CloseIcon = styled.span`
  content: 'x';
  cursor: pointer;
  position: fixed;
  right: calc(21% - 30px);
  top: calc(100vh - 85vh - 33px);
  background: #ededed;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  line-height: 20px;
  text-align: center;
  border: 1px solid #999;
  font-size: 20px;

  @media screen and (max-width: 820px) {

  }
`;